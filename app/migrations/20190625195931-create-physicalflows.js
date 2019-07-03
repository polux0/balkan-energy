'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('physicalflows', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstCountryId: {
        type: Sequelize.INTEGER,
        references: {
         model: "country",
         key: "id"
        }
      },
      secondCountryId: {
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
      timestamp: {
        type: Sequelize.DATE
      },
      measure: {
        type: Sequelize.STRING
      },
      value: {
        type: Sequelize.DECIMAL
      },
      automaticallyUpdated: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('physicalflows');
  }
};