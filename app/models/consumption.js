'use strict';
module.exports = (sequelize, DataTypes) => {
  const consumption = sequelize.define('consumption', {
    code: DataTypes.STRING,
    display: DataTypes.STRING,
    measure: DataTypes.STRING,
    timestamp: DataTypes.DATE,
    potential: DataTypes.DECIMAL,
    realised: DataTypes.DECIMAL,
    automaticallyUpdated: DataTypes.INTEGER
  }, {});
  consumption.associate = function(models) {
    // associations can be defined here
  };
  return consumption;
};