'use strict';

module.exports = (sequelize, DataTypes) => {
  
  const auctionMonthly = sequelize.define('auctionMonthly', 
  {
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
  },
  {
    
   freezeTableName: true
  
  });
  
  auctionMonthly.associate = (models) =>
    {
      auctionMonthly.hasMany(models.country, {
        foreignKey: 'firstCountryId'
      });

      auctionMonthly.hasMany(models.country, {
        foreignKey: 'secondCountryId'
      });

    };

    return auctionMonthly;
};