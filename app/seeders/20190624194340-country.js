'use strict';

module.exports = {

  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('country', [{
        code: 'RS0',
        displayCode: 'Serbia',
        measure: 'nothing', 
        verbose: ''
      },
      {
        code: 'RS1',
        displayCode: 'Serbia',
        measure: 'nothing',
        verbose: 'EMS'
      },
      {
        code: 'RS2',
        displayCode: 'Serbia',
        measure: 'nothing',
        verbose: 'OST'
      },
      {
        code: 'RS3',
        displayCode: 'Serbia',
        measure: 'nothing',
        verbose: 'Temperature Belgrade'
      },
      {
        code: 'RS4',
        displayCode: 'Serbia',
        measure: 'nothing',
        verbose: 'Temperature Novi Sad'
      },
      // should do the rest @ end of file
      // {
      //   code: 'RS1',
      //   displayCode: 'Serbia',
      //   measure: 'nothing',
      //   verbose: 'EMS'
      // },
      // {
      //   code: 'RS1',
      //   displayCode: 'Serbia',
      //   measure: 'nothing',
      //   verbose: 'EMS'
      // },
      // {
      //   code: 'RS1',
      //   displayCode: 'Serbia',
      //   measure: 'nothing',
      //   verbose: 'EMS'
      // },
      // {
      //   code: 'RS1',
      //   displayCode: 'Serbia',
      //   measure: 'nothing',
      //   verbose: 'EMS'
      // },
      // {
      //   code: 'RS1',
      //   displayCode: 'Serbia',
      //   measure: 'nothing',
      //   verbose: 'EMS'
      // },
      // {
      //   code: 'RS1',
      //   displayCode: 'Serbia',
      //   measure: 'nothing',
      //   verbose: 'EMS'
      // },
      // {
      //   code: 'RS1',
      //   displayCode: 'Serbia',
      //   measure: 'nothing',
      //   verbose: 'EMS'
      // },
      
       
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('country', null, {});
    
  }
};



// # id, code, displayCode, measure, automaticallyUpdated, createdAt, updatedAt, verbose
// '29', 'AL', 'Albania', NULL, '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL
// '30', 'AT', 'Austria', NULL, '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL
// '31', 'BA', 'Bosnia and Herzegovina', NULL, '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL
// '32', 'BG', 'Bulgaria', NULL, '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL
// '33', 'HR', 'Croatia', NULL, '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL
// '34', 'CZ', 'Czech Republic', NULL, '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL
// '35', 'MK', 'N. Macedonia', NULL, '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL
// '36', 'DE', 'Germany', NULL, '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL
// '37', 'GR', 'Greece', NULL, '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL
// '38', 'HU', 'Hungary', NULL, '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL
// '39', 'ME', 'Montenegro', NULL, '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL
// '40', 'RO', 'Romania', NULL, '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL
// '41', 'RS', 'Serbia', NULL, '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL
// '42', 'SK', 'Slovakia', NULL, '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL
// '43', 'SI', 'Slovenia', NULL, '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL
// '44', 'TR', 'Turkey', NULL, '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL
// '45', 'IT', 'Italy', NULL, '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL
// '46', 'CH', 'Switzerland', NULL, '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL
// '47', 'BY', 'Belarus', NULL, '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL
// '48', 'BE', 'Belgium', NULL, '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL
// '49', 'CY', 'Cyprus', NULL, '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL
// '50', 'DK', 'Denmark', NULL, '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL
// '51', 'EE', 'Estonia', NULL, '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL
// '52', 'FI', 'Finland', NULL, '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL
// '53', 'FR', 'France', NULL, '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL
// '54', 'IE', 'Ireland', NULL, '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL
// '55', 'LV', 'Latvia', NULL, '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL
// '56', 'LT', 'Lithuania', NULL, '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL
// '57', 'LU', 'Luxembourg', NULL, '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL
// '58', 'MT', 'Malta', NULL, '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL
// '59', 'MD', 'Moldova', NULL, '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL
// '60', 'NL', 'Netherlands', NULL, '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL
// '61', 'NO', 'Norway', NULL, '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL
// '62', 'PL', 'Poland', NULL, '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL
// '63', 'PT', 'Portugal', NULL, '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL
// '64', 'RU', 'Russia', NULL, '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL
// '65', 'ES', 'Spain', NULL, '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL
// '66', 'SE', 'Sweden', NULL, '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL
// '67', 'UA', 'Ukraine', NULL, '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL
// '68', 'UK', 'United Kingdom', NULL, '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL
// '69', 'KS', 'Kosovo', NULL, '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL
// '70', 'AL', 'Albania', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL
