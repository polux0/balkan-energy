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

  var fs = require("fs");


  console.log('/dirname => ', __dirname);
  console.log('/filename => ', __filename);

  let test = "" +__dirname + filename; 


  var fs = require("fs");
  var filename = "/src/utils/excel-parser-scripts/auction-daily-sample-to-become.ods";

  const XLXS = require('xlsx');

  const workbook = XLXS.readFile(filename);

  const sheetNameList = workbook.SheetNames;
  
  // let toMap = JSON.stringify(XLXS.utils.sheet_to_json(workbook.Sheets[sheetNameList[0]]));
  let toMap = XLXS.utils.sheet_to_json(workbook.Sheets[sheetNameList[0]]);

  let firstInsert = toMap.map
  console.log('toMap: ', toMap);

  toMap.map(element => {
    console.log('timestamp: \n', element.timestamp);
    console.log('capacity12: \n', element.capacity12);
    console.log('price12: \n', element.price12);
  })

  res.send(toMap);


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