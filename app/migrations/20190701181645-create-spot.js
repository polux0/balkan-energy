'use strict';
module.exports = {
  
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('spot', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      countryId: {
        type: Sequelize.INTEGER,
        references: {
         model: "country",
         key: "id"
        }
      },
      code: {
        type: Sequelize.STRING
      },
      displayCode: {
        type: Sequelize.STRING
      },
      measure: {
        type: Sequelize.STRING
      },
      timestamp: {
        type: Sequelize.DATE
      },
      value: {
        type: Sequelize.DECIMAL(10,3)
      },
      automaticallyUpdated: {
        type: Sequelize.INTEGER,
        default: '0'
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
    return queryInterface.dropTable('spot');
  }
};