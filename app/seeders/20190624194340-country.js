'use strict';

module.exports = {

  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('country', [
      {
        code: 'AL',
        displayCode: 'Albania',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'AL0',
        displayCode: 'Albania',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'AT',
        displayCode: 'Austria',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'AT0',
        displayCode: 'Austria',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'BA',
        displayCode: 'Bosnia and Herzegovina',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'BA0',
        displayCode: 'Bosnia and Herzegovina',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'BG',
        displayCode: 'Bulgaria',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'BG0',
        displayCode: 'Bulgaria',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'HR',
        displayCode: 'Croatia',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'HR0',
        displayCode: 'Croatia',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'CZ',
        displayCode: 'Czech Republic',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'CZ0',
        displayCode: 'Czech Republic',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'MK',
        displayCode: 'N. Macedonia',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'MK0',
        displayCode: 'N. Macedonia',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'DE',
        displayCode: 'Germany',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'DE0',
        displayCode: 'Germany',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'GR',
        displayCode: 'Greece',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'GR0',
        displayCode: 'Greece',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'HU',
        displayCode: 'Hungary',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'HU0',
        displayCode: 'Hungary',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'ME',
        displayCode: 'Montenegro',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'ME0',
        displayCode: 'Montenegro',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'RO',
        displayCode: 'Romania',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'RO0',
        displayCode: 'Romania',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'RS',
        displayCode: 'Serbia',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'RS0',
        displayCode: 'Serbia',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'SK',
        displayCode: 'Slovakia',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'SK0',
        displayCode: 'Slovakia',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'SI',
        displayCode: 'Slovenia',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'SI0',
        displayCode: 'Slovenia',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'TR',
        displayCode: 'Turkey',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'TR0',
        displayCode: 'Turkey',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'IT',
        displayCode: 'Italy',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'IT0',
        displayCode: 'Italy',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'CH',
        displayCode: 'Switzerland',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'CH0',
        displayCode: 'Switzerland',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'BY',
        displayCode: 'Belarus',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'BY0',
        displayCode: 'Belarus',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'BE',
        displayCode: 'Belgium',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'BE0',
        displayCode: 'Belgium',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'CY',
        displayCode: 'Cyprus',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'CY0',
        displayCode: 'Cyprus',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'DK',
        displayCode: 'Denmark',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'DK0',
        displayCode: 'Denmark',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'EE',
        displayCode: 'Estonia',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'EE0',
        displayCode: 'Estonia',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'FI',
        displayCode: 'Finland',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'FI0',
        displayCode: 'Finland',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'FR',
        displayCode: 'France',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'FR0',
        displayCode: 'France',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'IE',
        displayCode: 'Ireland',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'IE0',
        displayCode: 'Ireland',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'LV',
        displayCode: 'Latvia',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'LV0',
        displayCode: 'Latvia',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'LT',
        displayCode: 'Lithuania',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'LT0',
        displayCode: 'Lithuania',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'LU',
        displayCode: 'Luxembourg',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'LU0',
        displayCode: 'Luxembourg',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'MT',
        displayCode: 'Malta',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'MT0',
        displayCode: 'Malta',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'RS0',
        displayCode: 'Moldova',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'MD',
        displayCode: 'Moldova',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'MD0',
        displayCode: 'Moldova',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'NL',
        displayCode: 'Netherlands',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'NL0',
        displayCode: 'Netherlands',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'NO',
        displayCode: 'Norway',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'NO0',
        displayCode: 'Norway',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'PL',
        displayCode: 'Poland',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'PL0',
        displayCode: 'Poland',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'PT',
        displayCode: 'Portugal',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'PT0',
        displayCode: 'Portugal',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'RU',
        displayCode: 'Russia',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'RU0',
        displayCode: 'Russia',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'ES',
        displayCode: 'Spain',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'ES0',
        displayCode: 'Spain',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'SE',
        displayCode: 'Sweden',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'SE0',
        displayCode: 'Sweden',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'UA',
        displayCode: 'Ukraine',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'UA0',
        displayCode: 'Ukraine',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'UK',
        displayCode: 'United Kingdom',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'UK0',
        displayCode: 'United Kingdom',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'KS',
        displayCode: 'Kosovo',
        measure: 'null',
        verbose: 'null'
      },
      {
        code: 'KS0',
        displayCode: 'Kosovo',
        measure: 'null',
        verbose: 'null'
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
        verbose: 'CGES'
      },
      {
        code: 'AL1',
        displayCode: 'Albania',
        measure: 'nothing',
        verbose: 'EMS'
      },
      {
        code: 'AL2',
        displayCode: 'Albania',
        measure: 'nothing',
        verbose: 'OST'
      },
      {
        code: 'ME1',
        displayCode: 'Montenegro',
        measure: 'nothing',
        verbose: 'EMS'
      },
      {
        code: 'ME2',
        displayCode: 'Montenegro',
        measure: 'nothing',
        verbose: 'CGES'
      },
      {
        code: 'BG1',
        displayCode: 'Bulgaria',
        measure: 'nothing',
        verbose: 'ESO'
      },
      {
        code: 'BG2',
        displayCode: 'Bulgaria',
        measure: 'nothing',
        verbose: 'TEIAS'
      },
      {
        code: 'TR1',
        displayCode: 'Turkey',
        measure: 'nothing',
        verbose: 'ESO'
      },
      {
        code: 'TR2',
        displayCode: 'Turkey',
        measure: 'nothing',
        verbose: 'TEIAS'
      }
      
       
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('country', null, {});
    
  }
};

