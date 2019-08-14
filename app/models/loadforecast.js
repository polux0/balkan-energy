'use strict';
module.exports = (sequelize, DataTypes) => {
  const loadforecast = sequelize.define('loadforecast', {
    timestamp: DataTypes.DATE,
    countryId: DataTypes.INTEGER,
    value: DataTypes.DECIMAL(10,2),
    automaticallyUpdated: DataTypes.INTEGER
  }, {freezeTableName: true});

  loadforecast.associate = (models) => {
    
    loadforecast.hasMany(models.country, {
      foreignKey: 'countryId'
    });

  };
  return loadforecast;
};