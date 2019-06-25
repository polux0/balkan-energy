'use strict';
module.exports = (sequelize, DataTypes) => {
  const production = sequelize.define('production', {
    code: DataTypes.STRING,
    measure: DataTypes.STRING,
    timestamp: DataTypes.DATE,
    value: DataTypes.DECIMAL,
    type: DataTypes.STRING,
    subtype: DataTypes.STRING,
    displayCode: DataTypes.STRING,
    automaticallyUpdated: DataTypes.INTEGER
  }, {});
  production.associate = function(models) {
    // associations can be defined here
  };
  return production;
};