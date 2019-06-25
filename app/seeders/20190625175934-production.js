'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('production', [{

      countryId: 1,
      code: '16',
      measure: 'spot-something',
      value: 'spot-another-something',
      measure: 'nothing',
      timestamp: '0000-00-00 00:00:00',
      value: '10.1',
      type: 'type',
      subtype: 'subtype',
      displayCode: 'displayCode',
      automaticallyUpdated: 0
      
    }], {});
  },



  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('production', null, {});
  }
};
