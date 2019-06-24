'use strict';
module.exports = (sequelize, DataTypes) => {
  const country = sequelize.define('country', {
    code: DataTypes.STRING,
    displayCode: DataTypes.STRING,
    measure: DataTypes.STRING,
    automaticallyUpdated: DataTypes.INTEGER
  }, {});
  country.associate = function(models) {
    // associations can be defined here
  };
  return country;
};