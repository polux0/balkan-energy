'use strict';

const express = require('express')
const bodyParser = require('body-parser');

const app = express()
const port = 3001

app.use(bodyParser.json());


const {country} = require('./models');
const {consumption} = require('./models');
const {auctionDaily} =  require('./models');

const auctionDailyController = require('./controllers/auctionDailyController');

const countryRouter = require('./routes/api/v1/country');
const consumptionRouter = require('./routes/api/v1/consumption');

app.use('/countries', countryRouter);
app.use('/consumption', consumptionRouter);

// const Sequelize = require('sequelize');

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


  // let auction = await auctionDaily.create
  // ({
  //   secondCountryId: 1,
  //   code: '5',
  //   displayCode: '5',
  //   timestamp: '0000-00-00 00:00:00',
  //   capacity: 10.51,
  //   value: 10.51,
  //   measure1: 'lol',
  //   measure2: 'anotherlol'
  // })
    
  // let destroy = await auctionDaily.destroy({where: { id: 3}})

  // res.status(200).json(destroy);
  // res.status(200).json(auction);

  // let b = await country.create(
  //   {
  //       code: 'HR',
  //       display: 'CONS-HR',
  //       measure: 'Measure',
  //       timestamp: '0000-00-00 00:00:00',
  //       potential: 10.51,
  //       realised: 7.79,
  //       automaticallyUpdated: 1
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
app.post('/auction', auctionDailyController.create);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))