'use strict';
module.exports = (sequelize, DataTypes) => {
  const physicalflows = sequelize.define('physicalflows', {
    code: DataTypes.STRING,
    displayCode: DataTypes.STRING,
    measure: DataTypes.STRING,
    timestamp: DataTypes.DATE,
    value: DataTypes.DECIMAL,
    automaticallyUpdated: DataTypes.INTEGER
  }, {freezeTableName: true});
  physicalflows.associate = function(models) {
    // associations can be defined here
  };
  return physicalflows;
};