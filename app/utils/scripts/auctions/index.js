'use strict';

const filename = "/src/utils/scripts/auction-update-test/auctions-auto.xls";
const XLXS = require('xlsx');
const workbook = XLXS.readFile(filename);
const sheetNameList = workbook.SheetNames;
const {auctionDaily} = require('../../../models')
const {country} = require('../../../models') 

async function compare(object1){

  let objectComparedTo = await auctionDaily.findOne({where: {timestamp: object1.timestamp}})

  if(!objectComparedTo){
    return auctionDaily.create(object1)
  }
  // problem je što ima nekoliko istih, tj. pod istim timestamp-om, potrebno je dodati nekoliko u where uslov
  else if(object1.capacity != objectComparedTo.capacity){
    return auctionDaily.update({capacity: object1.capacity}, {where: {timestamp: objectComparedTo.timestamp}})
  }
  else if(object1.value !== objectComparedTo.value){
    return auctionDaily.update({value: object1.value}, {where: {timestamp: objectComparedTo.timestamp}})
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
        
        // try {
        //   console.log('LEEEEEEEEEEEEEEEEEENGTH OF PROMISES: \n', finalArray)
        //   Promise.all(finalArray)  
        // } catch (error) {
        //   console.log('Error occured while trying to insert')
        //   throw new Error('Error occured while trying to insert auction daily data')
        // }
        // Begin -> Working version, create only;
        // finalArray.push(object);

        // try
        // {
        //   resultingInsert = await auctionDaily.bulkCreate(finalArray);

        // }
        // catch (error)
        // {
        //   console.log('Error occured while trying to insert `auction daily` data: ', error);
        //   throw new Error('Error occured while trying to insert `auction daily` data: ', error)          
        // }
        // End -> Working version, create only;
        
      })

    }
})
try {
  console.log('LEEEEEEEEEEEEEEEEEENGTH OF PROMISES: \n', finalArray)
  Promise.all(finalArray)  
} catch (error) {
  console.log('Error occured while trying to insert')
  throw new Error('Error occured while trying to insert auction daily data')
}

}
module.exports = {importMe}