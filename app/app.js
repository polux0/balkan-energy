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
  
  let toMap = XLXS.utils.sheet_to_json(workbook.Sheets[sheetNameList[0]]);

  let finalArray = [];
  
  console.log(toMap);

  toMap.map((element, counter) => {

    // console.log('Element: ');
    console.log(element.priceHURS);

    // if(counter > 1)
    // {
    //   finalArray.push({timestamp: element.timestamp, capacity:element.capacityHURS, price:element.priceHURS}, {timestamp:element.timestamp, capacity:element.capacityRSHU , price:element.priceRSHU  });
    //   // return AuctionDaily.create({
    //     // timestamp:...
    //   // });
    // }
    // finalArray.push({timestamp: element.timestamp, capacity:element.capacityHURS, price:element.priceHURS}, {timestamp:element.timestamp, capacity:element.capacityRSHU , price:element.priceRSHU  });
   

  })

  // console.log('Final array: \n');
  // console.log(finalArray);
 
  res.status(200).send(toMap);
  
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