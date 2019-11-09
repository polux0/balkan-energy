'use strict';
// will change for purpose of testing;
const filename = "/src/utils/scripts/auction-update-test/auctions-auto.xls";
const XLXS = require('xlsx');
const workbook = XLXS.readFile(filename);
const sheetNameList = workbook.SheetNames;
const {auctionDaily} = require('../../../models')
const {country} = require('../../../models') 

async function importMe(){
// {header: 1} -> returns header as first array, results as anothers; 
let toMap = XLXS.utils.sheet_to_json(workbook.Sheets[sheetNameList[0]], {header: 1});

let result = XLXS.utils.sheet_to_json(workbook.Sheets[sheetNameList[0]]);

let finalArray = [];

let resultingInsert;

let headers = toMap[0].map(header => {

  return header;
})

let timestamp = headers[0];
headers.splice(0,1);

console.log('heades before everything: ', headers);

headers.map((header, counter) => {

    if(header.startsWith('capacity')){

      let countries = header.substring(header.length - 4, header.length);

      let derivedCountries = `price${countries}`;

      
      result.map(async value => {

        let firstCountryId, secondCountryId, resultingInsert;

        try 
        {

           firstCountryId = await country.findOne(
           {
              where:
              {
                code:derivedCountries.substring(derivedCountries.length-4, derivedCountries.length-2)
              }

            });
    
            secondCountryId = await country.findOne(
            {
              where:
              {
                code: derivedCountries.substring(derivedCountries.length-2, derivedCountries.length)
              }

            });

        }
        catch (error)
        {
          console.log('there is a problem with fetching id for country `from` and country `to` ', error);
          throw new Error('there is a problem with fetching id for country `from` and country `to` ', error)
        }

        let object = {

             firstCountryId: firstCountryId.id,
             secondCountryId: secondCountryId.id,
             code: `${countries}`,
             displayCode: `auction daily ${countries}`,
             timestamp: value[timestamp],
             capacity: value[header],
             value: value[derivedCountries]

        }

          finalArray.push(object);

        try
        {
          resultingInsert = await auctionDaily.bulkCreate(finalArray);

        }
        catch (error)
        {
          console.log('Error occured while trying to insert `auction daily` data: ', error);
          throw new Error('Error occured while trying to insert `auction daily` data: ', error)          
        }
        
      })

    }
})
}
module.exports = {importMe}