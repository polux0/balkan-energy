'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('auctionDaily', {
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
      capacity: {
        type: Sequelize.DECIMAL(10,3)
      },
      atc: {
        type: Sequelize.DECIMAL(10,3)
      },
      value: {
        type: Sequelize.DECIMAL(10,3)
      },
      measure1: {
        type: Sequelize.STRING
      },
      measure2: {
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
    return queryInterface.dropTable('auctionDaily');
  }
};