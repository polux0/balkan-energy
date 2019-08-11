'use strict';
module.exports = (sequelize, DataTypes) => {
  const loadrealized = sequelize.define('loadrealized', {
    timestamp: DataTypes.DATE,
    countryId: DataTypes.INTEGER,
    value: DataTypes.DECIMAL(10,2),
    automaticallyUpdated: DataTypes.INTEGER
  }, {freezeTableName: true});

  loadrealized.associate = (models) => {
    // associations can be defined here
    loadrealized.hasMany(models.country, {
      foreignKey: 'countryId'
    });

  };
  return loadrealized;
};