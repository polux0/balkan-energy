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

  var exceltojson = require("xlsx-to-json-lc");


  var fs = require("fs");
  var filename = "app/utils/auction-daily-sample.xlsx";

    fs.readFile(__dirname + filename, "utf8", function(err, data) {
        if (err) throw err;
        console.log('excel file: ' + data);
    });


  exceltojson({
    input: '../auction-daily-sample.xlsx',
    // output: "if you want output to be stored in a file",
    // sheet: "sheetname",  // specific sheetname inside excel file (if you have multiple sheets)
    lowerCaseHeaders:true //to convert all excel headers to lowr case in json

  }, function(err, result) {
    if(err) {
      console.error(err);
    } else {
      console.log(result);
      //result will contain the overted json data
    }
  });


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

// app.post('/auction', auctionDailyController.create);

app.listen(port, () => console.log(`Example app listening on port ${port}!`)) 