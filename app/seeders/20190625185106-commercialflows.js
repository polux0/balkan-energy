'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkInsert('commercialflows', [{

        firstCountryId: 4,
        secondCountryId: 1,
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
