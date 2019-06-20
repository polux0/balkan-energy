'use strict';
module.exports = (sequelize, DataTypes) => {
  const User3 = sequelize.define('User3', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  User3.associate = function(models) {
    // associations can be defined here
  };
  return User3;
};