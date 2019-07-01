'use strict';
module.exports = (sequelize, DataTypes) => {
  const country = sequelize.define('country', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  country.associate = function(models) {
    // associations can be defined here
  };
  return country;
};