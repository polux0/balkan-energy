'use strict';
module.exports = (sequelize, DataTypes) => {
  const commercialflows = sequelize.define('commercialflows', {
    code: DataTypes.STRING,
    displayCode: DataTypes.STRING,
    measure: DataTypes.STRING,
    timestamp: DataTypes.DATE,
    value: DataTypes.DECIMAL,
    automaticallyUpdated: DataTypes.INTEGER
  }, {});
  commercialflows.associate = function(models) {
    // associations can be defined here
  };
  return commercialflows;
};