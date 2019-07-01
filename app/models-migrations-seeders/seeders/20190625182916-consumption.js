'use strict';

module.exports = {
  
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkInsert('consumption', [{
      
      countryId: 1,
      code: 'code',
      displayCode: 'display',
      measure: 'measure',
      timestamp: '0000-00-00 00:00:00',
      potential: 'potential',
      realised: 'realised', 
      automaticallyUpdated: 1
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
  
    return queryInterface.bulkDelete('consumption', null, {});
   
  }
};
