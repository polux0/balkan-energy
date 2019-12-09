'use strict';
const fs = require('fs');

// Use a different table name - @migrationStorageTableName. Default: `SequelizeMeta`
// to create migration user 3306 port, to execute it change to 33061
// to execute migration directly to production 116.203.220.213

module.exports = {
  development: {
    username: 'root',
    password: 'Up6KjbnEV4Hgfo75YM393QdQsK3Z0aTNBz0DoirrW+c',
    database: 'energy',
    host: process.env.MYSQL_HOST,
    port: '3306',
    dialect: 'mysql',
    migrationStorageTableName: 'migrations',
    pool: 
    {
      max: 1000,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    freezeTableName: true
  },
  test: {
    username: 'database_test',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    dialect: 'mysql',
    // in case we need to import certificate;
    // dialectOptions: {
    //   ssl: {
    //     ca: fs.readFileSync(__dirname + '/mysql-ca-master.crt')
    //   }
    // }
  }
};
