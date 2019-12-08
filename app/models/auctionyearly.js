'use strict';

module.exports = (sequelize, DataTypes) => {
  
  const auctionYearly = sequelize.define('auctionYearly', 
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
  
  auctionYearly.associate = (models) =>
    {
      auctionYearly.hasMany(models.country, {
        foreignKey: 'firstCountryId'
      });

      auctionYearly.hasMany(models.country, {
        foreignKey: 'secondCountryId'
      });

    };

    return auctionYearly;
};

