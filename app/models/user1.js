'use strict';
module.exports = (sequelize, DataTypes) => {
  const User1 = sequelize.define('User1', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  User1.associate = function(models) {
    // associations can be defined here
  };
  return User1;
};