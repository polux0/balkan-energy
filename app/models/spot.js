'use strict';
module.exports = (sequelize, DataTypes) => {
  const spot = sequelize.define('spot', {
    code: DataTypes.STRING,
    displayCode: DataTypes.STRING,
    measure: DataTypes.STRING,
    timestamp: DataTypes.DATE,
    value: DataTypes.DECIMAL,
    automaticallyUpdated: DataTypes.INTEGER
  }, {});
  spot.associate = function(models) {
    // associations can be defined here
  };
  return spot;
};