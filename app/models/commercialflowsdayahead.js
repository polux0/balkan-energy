'use strict';
module.exports = (sequelize, DataTypes) => {
  const commercialflowsdayahead = sequelize.define('commercialflowsdayahead', {
    firstCountryId: DataTypes.INTEGER,
    secondCountryId: DataTypes.INTEGER,
    code: DataTypes.STRING,
    displayCode: DataTypes.STRING,
    timestamp: DataTypes.DATE,
    measure: DataTypes.STRING,
    value: DataTypes.DECIMAL,
    automaticallyUpdated: DataTypes.INTEGER
  }, {freezeTableName: true});
  commercialflowsdayahead.associate = function(models) {
    // associations can be defined here
  };
  return commercialflowsdayahead;
};