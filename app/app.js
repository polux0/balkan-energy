'use strict';

const express = require('express')
const app = express()
const port = 3001


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
  }
  
});
app.get('/', (req, res) =>
{
    sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    })
    .then(()=> {
      res.send('Testing sequelizer');
    })
   
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))