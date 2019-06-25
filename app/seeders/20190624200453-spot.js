'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkInsert('spot', [{
        countryId: 4,
        code: 'spot-something',
        displayCode: 'spot-another-something',
        measure: 'nothing',
        value: '10.1'
        
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('spot', null, {});
   
  }
};
