'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('loadrealized', [{

      timestamp: '2019-01-01 00:00:00',
      countryId: 1,
      value: 42563.5,
      automaticallyUpdated: 1

    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('loadrealized', null, {});
  }
};
