'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkInsert('commercialflows', [{

        countryId: 4,
        code: false,
        displayCode: 'displayCode',
        measure: 'measure',
        value: 'value',
        automaticallyUpdated: 1

      }], {});
    
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('commercialflows', null, {});

  }
};
