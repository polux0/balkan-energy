'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('consumption', {
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
      display: {
        type: Sequelize.STRING
      },
      measure: {
        type: Sequelize.STRING
      },
      timestamp: {
        type: Sequelize.DATE
      },
      potential: {
        type: Sequelize.DECIMAL
      },
      realised: {
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
    return queryInterface.dropTable('consumption');
  }
};