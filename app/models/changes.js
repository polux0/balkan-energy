'use strict';
module.exports = (sequelize, DataTypes) => {
  const changes = sequelize.define('changes', {
    file_type: DataTypes.STRING,
    filename: DataTypes.STRING,
    file_size: DataTypes.STRING,
    file_compared_to: DataTypes.STRING,
    file_imported: DataTypes.STRING
  }, {});
  changes.associate = function(models) {
    // associations can be defined here
  };
  return changes;
};