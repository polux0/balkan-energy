'use strict';

const express = require('express')
const bodyParser = require('body-parser');

const app = express()
const port = 3001

app.use(bodyParser.json());


const {country} = require('./models');
const {consumption} = require('./models');
const {auctionDaily} =  require('./models');


require('./routes/api/v1/')(app);


// const sequelize = new Sequelize(process.env.MYSQL_DATABASE, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, 
// {
//   host: process.env.MYSQL_HOST,
//   port: '3306',
//   dialect: 'mysql',
//   pool: 
//   {
//     max: 10,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   },
//   define: {
//     freezeTableName: true
//   }
  
// });
app.get('/', async (req, res) =>
{
  // this should be function to extract from excel, prepare results in array, and then post to `auction/daily/create`
  // uzeti auction manual kao referentnu tačku; ( testirati na `auction-daily-sample-to-become`);

  var filename = "/src/utils/excel-parser-scripts/auction-daily-sample-to-become.xlsx";

  const XLXS = require('xlsx');

  const workbook = XLXS.readFile(filename);

  const sheetNameList = workbook.SheetNames;
  

  // {header: 1} -> returns header as first array, results as anothers; 
  let toMap = XLXS.utils.sheet_to_json(workbook.Sheets[sheetNameList[0]], {header: 1});
  //

  let result = XLXS.utils.sheet_to_json(workbook.Sheets[sheetNameList[0]]);

  let finalArray = [];

  let headers = toMap[0].map(header => {

    return header;
  })

  let timestamp = headers[0];
  headers.splice(0,1);

  //this works somehow, so, please, figure it out for whole solution;
  console.log('heades before everything: ', headers);

  headers.map((header, counter) => {

    if(header.startsWith('capacity')){

      let countries = header.substring(header.length - 4, header.length);

      let derivedCountries = `price${countries}`;

      result.map(value => {

        // let object = {

        //   timestamp: value[timestamp],
        //   [header] : value[header],
        //   [derivedCountries]: value[derivedCountries]

        // }

        //   firstCountryId: await country.findAll({where:{code = ...}})

        let object = {

             firstCountryId: derivedCountries.substring(derivedCountries.length-4, derivedCountries.length-2),
             secondCountryId: derivedCountries.substring(derivedCountries.length-2, derivedCountries.length),
             timestamp: value[timestamp],
             capacity: value[header],
             price: value[derivedCountries]

        }

          finalArray.push(object);
          // test with bigger sample; 
          // get first country id & second country id, then store in database; 
          // auctionDaily.bulkCreate(finalArray);
      })

    }
  })
    console.log('final array');
    // console.log(finalArray);
    res.status(200).send(finalArray);


  // sequelize
  // .authenticate()
  // .then(() => {
  //   console.log('Connection has been established successfully.');

  // })
  // .catch(err => {
  //   console.error('Unable to connect to the database:', err);
  //   res.send(err);
  // })
  // .then(()=> {
  //   res.send('Testing sequelizer: sucess');
  // })
   
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`)) 