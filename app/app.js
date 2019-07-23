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

  var filename = "/src/utils/excel-parser-scripts/auctions-manual.xlsx";

  const XLXS = require('xlsx');

  const workbook = XLXS.readFile(filename);

  const sheetNameList = workbook.SheetNames;
  

  // {header: 1} -> returns header as first array, results as anothers; 
  let toMap = XLXS.utils.sheet_to_json(workbook.Sheets[sheetNameList[2]], {header: 1});
  //

  let result = XLXS.utils.sheet_to_json(workbook.Sheets[sheetNameList[2]]);

  let finalArray = [];

  let headers = toMap[0].map(header => {

    return header;
  })
  // list all by headers;

  // headers.map((header, counter) => {

  //   if(header == 'timestamp'){

  //     console.log('timestamp header should be intact: ', header);

  //   }
  //   else console.log('header, id`s of countries: ', header.substring(header.length - 4, header.length));

  // })

  let timestamp = headers[0];
  headers.splice(0,1);

  //this works somehow, so, please, figure it out for whole solution;
  console.log('heades before everything: ', headers);

  headers.map((header, counter) => {

    if(header.startsWith('Dcapacity')){

      let countries = header.substring(header.length - 4, header.length);

      let derivedCountries = `Dprice${countries}`;

      result.map(value => {

        let object = {

          timestamp: value[timestamp],
          [header] : value[header],
          [derivedCountries]: value[derivedCountries]

        }

          finalArray.push(object);
          // test with bigger sample; 
          // get first country id & second country id, then store in database; 
          // auctionDaily.bulkCreate(finalArray);
      })

    }
  })
    console.log('final array');
    console.log(finalArray);
    res.status(200).send('eh');


  //   //structure; 
  //   // result = await auctionDaily.create
  //   //         (
  //   //             {
  //   //                 firstCountryId: req.body.firstCountryId,
  //   //                 secondCountryId: req.body.secondCountryId,
  //   //                 code: req.body.code,
  //   //                 displayCode: req.body.displayCode,
  //   //                 //fixed for now; 
  //   //                 timestamp: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
  //   //                 //
  //   //                 capacity: req.body.capacity,
  //   //                 atc: req.body.atc,
  //   //                 value: req.body.value,
  //   //                 measure1: req.body.measure1,
  //   //                 measure2: req.body.measure2
  //   //             }
  //   //         );

  //   // if(counter > 1)
  //   // {
  //   //   finalArray.push({timestamp: element.timestamp, capacity:element.capacityHURS, price:element.priceHURS}, {timestamp:element.timestamp, capacity:element.capacityRSHU , price:element.priceRSHU  });
  //   //   // return AuctionDaily.create({
  //   //     // timestamp:...
  //   //   // });
  //   // }
  //   // finalArray.push({timestamp: element.timestamp, capacity:element.capacityHURS, price:element.priceHURS}, {timestamp:element.timestamp, capacity:element.capacityRSHU , price:element.priceRSHU  });
   

  // })



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