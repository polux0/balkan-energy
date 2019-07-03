'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkInsert('physicalflows', [{

        firstCountryId: 4,
        secondCountryId: 1,
        code: 'PH',
        displayCode: 'displayCode',
        measure: 'measure',
        value: 'value',
        automaticallyUpdated: 1

      }], {});
    
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('physicalflows', null, {});

  }
};