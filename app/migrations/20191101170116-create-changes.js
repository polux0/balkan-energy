'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('changes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      file_type: {
        type: Sequelize.STRING
      },
      filename: {
        type: Sequelize.STRING
      },
      file_size: {
        type: Sequelize.STRING
      },
      file_compared_to: {
        type: Sequelize.STRING
      },
      file_should_be_imported: {
        type: Sequelize.STRING
      },
      file_imported: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('changes');
  }
};