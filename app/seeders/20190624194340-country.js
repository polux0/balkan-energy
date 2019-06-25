'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('country', [{
        code: 'AL',
        displayCode: 'Albania',
        measure: 'nothing'
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('country', null, {});
    
  }
};
