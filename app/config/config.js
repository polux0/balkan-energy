'use strict';
const fs = require('fs');

// Use a different table name - @migrationStorageTableName. Default: `SequelizeMeta`

module.exports = {
  development: {
    username: 'root',
    password: 'Up6KjbnEV4Hgfo75YM393QdQsK3Z0aTNBz0DoirrW+c',
    database: 'energy',
    host: process.env.MYSQL_HOST,
    port: '33061',
    dialect: 'mysql',
    migrationStorageTableName: 'migrations',
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
