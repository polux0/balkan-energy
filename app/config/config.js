const fs = require('fs');

module.exports = {
  development: {
    username: 'root',
    password: 'Up6KjbnEV4Hgfo75YM393QdQsK3Z0aTNBz0DoirrW+c',
    database: 'environment',
    host: process.env.MYSQL_HOST,
    port: '33061',
    dialect: 'mysql',
    migrationStorage: "json",


    // Use a different file name. Default: sequelize-meta.json
    migrationStoragePath: 'migrations.json',

    // Use a different table name. Default: SequelizeMeta
    migrationStorageTableName: 'migrations',
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
    // dialectOptions: {
    //   ssl: {
    //     ca: fs.readFileSync(__dirname + '/mysql-ca-master.crt')
    //   }
    // }
  }
};
