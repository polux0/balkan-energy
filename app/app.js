'use strict';

const express = require('express')
const app = express()
const port = 3001

const {country} = require('./models');
const {consumption} = require('./models');

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


  // let a = await country.findOne({ where: { id: 7 } })
  // let b = await country.create(
  //   {
  //     code: 'BIH',
  //     displayCode: 'Bosnia',
  //     measure: 'head'
  //   })
  let b = await country.create(
    {
        code: 'HR',
        display: 'CONS-HR',
        measure: 'Measure',
        timestamp: '0000-00-00 00:00:00',
        potential: 10.51,
        realised: 7.79,
        automaticallyUpdated: 1
  })
  res.status(200).json(b);

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