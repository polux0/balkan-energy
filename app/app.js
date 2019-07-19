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
  // this should be function in order to extract from excel, prepare results in array, and then post to `auction/daily/create`
  // uzeti auction manual kao referentnu tačku;
  var filename = "/src/utils/excel-parser-scripts/auction-daily-sample-to-become.xlsx";

  const XLXS = require('xlsx');

  const workbook = XLXS.readFile(filename);

  const sheetNameList = workbook.SheetNames;
  

  // {header: 1} -> returns header as first array, results as anothers; 
  let toMap = XLXS.utils.sheet_to_json(workbook.Sheets[sheetNameList[0]], {header: 1});
  let result = XLXS.utils.sheet_to_json(workbook.Sheets[sheetNameList[0]]);


  let finalArray = [];

  let headers = toMap[0].map(header => {
    // console.log('type of header: ', typeof(header));
    // console.log('header: ', header);  
    return header;
  })

  // headers.map(header => {
  //   console.log('header by header: ' + header);
  // })

  //   result.map(element => {
  //   console.log(element.headers[0]);
  // })
  let timestamp = headers[0];
  
  console.log(result[0][timestamp]);
  
  // console.log(toMap[0]);
  // console.log(a);
   
  // }
  // toMap.map((element, counter) => {

  //   // console.log('Element: ');
  //   console.log(element);

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

  // console.log('Final array: \n');
  // console.log(finalArray);
 
  res.status(200).send('eh');
  
  // this should be function in order to extract from excel, prepare results in array, and then post to `auction/daily/create`


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