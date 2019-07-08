'use strict';

module.exports = (sequelize, DataTypes) => {
  const auctionDaily = sequelize.define('auctionDaily', {
    firstCountryId: DataTypes.INTEGER,
    secondCountryId: DataTypes.INTEGER,
    code: DataTypes.STRING,
    displayCode: DataTypes.STRING,
    timestamp: DataTypes.DATE,
    capacity: DataTypes.DECIMAL,
    atc: DataTypes.DECIMAL,
    value: DataTypes.DECIMAL,
    measure1: DataTypes.STRING,
    measure2: DataTypes.STRING
  }, {freezeTableName: true});
  
  auctionDaily.associate = (models) =>
    {
      auctionDaily.hasMany(models.country, {
        foreignKey: 'firstCountryId'
      });

      auctionDaily.hasMany(models.country, {
        foreignKey: 'secondCountryId'
      });

    };

    return auctionDaily;
};