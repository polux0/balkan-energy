'use strict';
module.exports = (sequelize, DataTypes) => {
  const User33 = sequelize.define('User33', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  User33.associate = function(models) {
    // associations can be defined here
  };
  return User33;
};