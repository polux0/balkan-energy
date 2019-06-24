'use strict';

const express = require('express')
const app = express()
const port = 3001

// const country = require('./models/country');
// const country1 = require('./models/country1');

const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.MYSQL_DATABASE, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, 
{
  host: process.env.MYSQL_HOST,
  port: '3306',
  dialect: 'mysql',
  pool: 
  {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  define: {
    freezeTableName: true
  }
  
});
app.get('/', (req, res) =>
{
  // const Test = country(sequelize, Sequelize);
  // Test.create({COUNTRYCODE: 'AL',COUNTRYDISPLAY: 'Albania', COUNTRYMEASURE: 'nothing'})
  //  const User = country1(sequelize, Sequelize);
  //  console.log(User);
  //  User.create({something: 'something'})
      // res.status(200).json('Aloha')
  //  .catch(error => res.status(401).json(error));
   
  // console.log(country1);
  sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
    res.send(err);
  })
  .then(()=> {
    res.send('Testing sequelizer: sucess');
  })
   
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))