'use strict';
// changed filename to sandbox in order to test it;
const moment = require('moment');
const filename = "/src/utils/scripts/data/production/auctions-manual/auctions-manual.xls";
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
      //change in other scripts as well;
      if(typeof objectComparedTo[0] === 'undefined'){
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

// console.log('heades before splice: ', headers);

headers.splice(0,1);

// console.log('heades after splice: ', headers);

headers.map((header, counter) => {

    if(header.startsWith('capacity')){

      let countries = header.substring(header.length - 6, header.length);

      let derivedCountries = `price${countries}`;

      
      result.map(async value => {

        // console.log('just timestamp' + value[timestamp]);

        let firstCountryId, secondCountryId, resultingInsert;

        try 
        {
          firstCountryId = await country.findOne({where:{code:derivedCountries.substring(derivedCountries.length-6, derivedCountries.length-3)}});    
          secondCountryId = await country.findOne({where:{code: derivedCountries.substring(derivedCountries.length-3, derivedCountries.length)}});
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
             //timestamp: moment(value[timestamp]).format('YYYY-MM-DD HH:mm:ss'),
             timestamp: value[timestamp],
             capacity: value[header],
             value: isNaN(value[derivedCountries]) ? null : value[derivedCountries] 
        }
        // console.log('timestamp, object by object, standard: \n' + value[timestamp])
        // console.log('timestamp, object by object, formated: \n' + moment(value[timestamp]).format('YYYY-MM-DD HH:mm:ss'))

        finalArray.push(compare(object))
      })

    }
})
try {
  await auctionDaily.bulkCreate(finalArray)
  //Promise.all(finalArray)  
} catch (error) {
  console.log('Error occured while trying to insert')
  throw new Error('Error occured while trying to insert auction daily data')
}

}
module.exports = {importMe}