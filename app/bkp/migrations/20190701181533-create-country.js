'use strict';
module.exports = (sequelize, DataTypes) => {
  const country = sequelize.define('country', {

    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    code: {
      type: DataTypes.STRING
    },
    displayCode: {
      type: DataTypes.STRING
    },
    measure: {
      type: DataTypes.STRING
    },
    automaticallyUpdated: {
      type: DataTypes.INTEGER,
      default: '0'
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    
  });
  country.associate = function(models) {
    // associations can be defined here
  };
  return country;
};