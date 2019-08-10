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

  var filename = "/src/utils/excel-parser-scripts/auctions/auctions-auto.xlsx";

  const XLXS = require('xlsx');

  const workbook = XLXS.readFile(filename);

  const sheetNameList = workbook.SheetNames;
  

  // {header: 1} -> returns header as first array, results as anothers; 
  let toMap = XLXS.utils.sheet_to_json(workbook.Sheets[sheetNameList[0]], {header: 1});

  let result = XLXS.utils.sheet_to_json(workbook.Sheets[sheetNameList[0]]);

  let finalArray = [];

  let headers = toMap[0].map(header => {

    return header;
  })

  console.log(headers.length)
  let timestamp = headers[0];
  headers.splice(0,1);

  //this works somehow, so, please, figure it out for whole solution;
  console.log('heades before everything: ', headers);

  let derivedCountries = null
  let firstCountryId, secondCountryId, resultingInsert;

//1. Excel ima manje kolona od te tabele u bazi - ucita to sto ima, ostale kolone u bazi ne dira
//2. Excel ima neku kolonu, tj novi header - napravi taj header ako nema, pa ucitaj
  headers.map(async header => {

  if(header.startsWith('capacity')){

      let countries = header.substring(header.length - 4, header.length);

      let derivedCountries = `price${countries}`;

        try 
        {

           firstCountryId = await country.findOne(
           {
              where:
              {
                code:derivedCountries.substring(derivedCountries.length-4, derivedCountries.length-2)
              }

            });
    
            secondCountryId = await country.findOne(
            {
              where:
              {
                code: derivedCountries.substring(derivedCountries.length-2, derivedCountries.length)
              }

            });

        }
        catch (error)
        {
          
          console.log('there is a problem with fetching id for country `from` and country `to` ', error);
          res.status(400).json(error);
        }

      
      result.map(async value => {

        let object = {

             firstCountryId: firstCountryId.id,
             secondCountryId: secondCountryId.id,
             code: `${countries}`,
             displayCode: `auction daily ${countries}`,
             timestamp: value[timestamp],
             capacity: value[header],
             value: value[derivedCountries]

        }

          finalArray.push(object);

        try
        {
          resultingInsert = await auctionDaily.bulkCreate(finalArray);
          console.log('finished')

        }
        catch (error)
        {

          console.log('Error occured while trying to insert `auction daily` data: ', error);
          res.status(400).json(error);
          
        }
        
      })

    }
    
  })
    res.status(200).send('hm');


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