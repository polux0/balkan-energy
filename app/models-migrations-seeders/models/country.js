'use strict';
module.exports = (sequelize, DataTypes) => {
  const country = sequelize.define('country', {
    code: DataTypes.STRING,
    displayCode: DataTypes.STRING,
    measure: DataTypes.STRING,
    automaticallyUpdated: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {freezeTableName: true});
  country.associate = function(models) {
    // associations can be defined here
  };
  return country;
};

// id: {
//   allowNull: false,
//   autoIncrement: true,
//   primaryKey: true,
//   type: Sequelize.INTEGER
// },
// code: {
//   type: Sequelize.STRING
// },
// displayCode: {
//   type: Sequelize.STRING
// },
// measure: {
//   type: Sequelize.STRING
// },
// automaticallyUpdated: {
//   type: Sequelize.INTEGER,
//   default: '0'
// },
// createdAt: {
//   allowNull: false,
//   type: Sequelize.DATE
// },
// updatedAt: {
//   allowNull: false,
//   type: Sequelize.DATE
// },