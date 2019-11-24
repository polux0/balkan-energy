'use strict';
var filename = "/src/utils/scripts/commercial-dayahead/commercial-dayahead.xls";

const XLXS = require('xlsx');

const workbook = XLXS.readFile(filename);

const sheetNameList = workbook.SheetNames;

let firstCountryId = null;
let secondCountryId = null;

const {commercialflowsdayahead} = require('../../../models')
const {country} = require('../../../models') 
const db = require('../../../models/index')

async function compare(object1){

  let objectComparedTo = null;
  
       objectComparedTo = await db.sequelize.query('SELECT * FROM commercialflowsdayahead WHERE timestamp = :timestamp AND code = :code', {
        replacements: {timestamp: object1.timestamp, code: object1.code},
        model: db.commercialflowsdayahead,
        mapToModel:true
      });

      if(Object.keys(objectComparedTo).length === 0){
        console.log('ostvario se uslov :)')
        return commercialflowsdayahead.create(object1)
      }      
      else if(object1.capacity !== objectComparedTo[0].dataValues.capacity || object1.value !== objectComparedTo[0].dataValues.value){
        return commercialflowsdayahead.update({capacity: object1.capacity, value: object1.value}, {where:{id:objectComparedTo[0].dataValues.id}})
      }

  
}

async function importMe(){

// {header: 1} -> returns header as first array, results as anothers; 
let toMap = XLXS.utils.sheet_to_json(workbook.Sheets[sheetNameList[0]], {header: 1});

let result = XLXS.utils.sheet_to_json(workbook.Sheets[sheetNameList[0]]);

let finalArray = [];

let final;

let headers = toMap[0].map(header => header)
let timestamp = headers[0]
headers.splice(0,1)

for(let i = 0; i<headers.length; i++){

try {

    firstCountryId = await country.findOne({where:{code:headers[i].substring(0, 2)}})
    secondCountryId = await country.findOne({where:{code:headers[i].substring(2, 4)}})
    console.log('first country id ( from database ): ', firstCountryId)
    console.log('second country id ( from database ): ', secondCountryId)
    for(let j = 0; j < result.length; j++){

        let object = {
            firstCountryId: firstCountryId.id,
            secondCountryId: secondCountryId.id,
            code: headers[i].substring(0, 2) + headers[i].substring(2, 4),
            displayCode: firstCountryId.displayCode + '-' + secondCountryId.displayCode,
            timestamp: result[i][timestamp],
            value: isNaN(result[i][headers[i]])? null: result[i][headers[i]] 
        }

    finalArray.push(compare(object))
        // upcoming comment went as first argument into `finalArray.push()`;
        // {firstCountryId: firstCountryId.id === null? 71: firstCountryId.id, secondCountryId: secondCountryId.id === null? 71: secondCountryId.id, code: headers[i].substring(0, 2) + headers[i].substring(2, 4), displayCode: firstCountryId.displayCode + '-' + secondCountryId.displayCode, timestamp: result[i][timestamp], value: result[i][headers[i]], automaticallyUpdated:0, createdAt: Date.now(), updatedAt: Date.now() }
    
    }
    
} 
catch (error) {
    console.log('error: ', error)
}
}
try
{

let test = await commercialflowsdayahead.bulkCreate(finalArray);

}
catch(error){
    console.log('error happend during insertion of commercial flows \n', error);
}

}
module.exports = {importMe}