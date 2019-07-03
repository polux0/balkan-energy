'use strict';
module.exports = (sequelize, DataTypes) => {
  const auctionDaily = sequelize.define('auctionDaily', {
    code: DataTypes.STRING,
    displayCode: DataTypes.STRING,
    timestamp: DataTypes.DATE,
    capacity: DataTypes.DECIMAL,
    atc: DataTypes.DECIMAL,
    value: DataTypes.DECIMAL,
    measure1: DataTypes.STRING,
    measure2: DataTypes.STRING
  }, {});
  auctionDaily.associate = function(models) {
    // associations can be defined here
  };
  return auctionDaily;
};