'use strict';

const filename = "/src/utils/scripts/data/production/auctions-auto/auctions-auto.xls";
const XLXS = require('xlsx');
const workbook = XLXS.readFile(filename);
const sheetNameList = workbook.SheetNames;
const {auctionDaily} = require('../../../../models')
const {country} = require('../../../../models') 
const db = require('../../../../models/index')

async function compare(object1){

  let objectComparedTo = null;
  
       objectComparedTo = await db.sequelize.query('SELECT * FROM auctionDaily WHERE timestamp = :timestamp AND code = :code', {
        replacements: {timestamp: object1.timestamp, code: object1.code},
        model: db.auctionDaily,
        mapToModel:true
      });

      if(Object.keys(objectComparedTo).length === 0){
        return auctionDaily.create(object1)
      }      
      else if(object1.capacity !== objectComparedTo[0].dataValues.capacity || object1.value !== objectComparedTo[0].dataValues.value){
        return auctionDaily.update({capacity: object1.capacity, value: object1.value}, {where:{id:objectComparedTo[0].dataValues.id}})
      }

  
}
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
        finalArray.push(compare(object))
      })

    }
})
try {
  Promise.all(finalArray)  
} catch (error) {
  console.log('Error occured while trying to insert')
  throw new Error('Error occured while trying to insert auction daily data')
}

}
module.exports = {importMe}