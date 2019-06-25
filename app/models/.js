'use strict';
module.exports = (sequelize, DataTypes) => {
  const = sequelize.define('', {
    code: DataTypes.STRING,
    displayCode: DataTypes.STRING,
    measure: DataTypes.STRING,
    timestamp: DataTypes.DATE,
    value: DataTypes.DECIMAL,
    automaticallyUpdated: DataTypes.INTEGER
  }, {});.associate = function(models) {
    // associations can be defined here
  };
  return;
};