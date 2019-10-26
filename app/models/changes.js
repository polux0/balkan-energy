'use strict';
module.exports = (sequelize, DataTypes) => {
  const changes = sequelize.define('changes', {
    file_type: DataTypes.STRING,
    filename: DataTypes.STRING,
    file_size: DataTypes.STRING,
    file_compared_to: DataTypes.INTEGER,
    file_imported: DataTypes.STRING
  }, {freezeTableName: true});
  changes.associate = function(models) {
    changes.hasOne(models.changes, {
      foreignKey: 'changesId'
    });
  };
  return changes;
};