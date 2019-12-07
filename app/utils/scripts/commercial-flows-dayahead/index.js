'use strict';

var filename = "/src/utils/scripts/commercial-dayahead-update-test/commercial-dayahead.xls";
const XLXS = require('xlsx');
const workbook = XLXS.readFile(filename);
const sheetNameList = workbook.SheetNames;
let firstCountryId = null;
let secondCountryId = null;
const {commercialflowsdayahead} = require('../../../models')
const {country} = require('../../../models') 
const db = require('../../../models/index')

// update should be fixed - it doesn't work;
async function compare(object1){

  let objectComparedTo = null;
  
       objectComparedTo = await db.sequelize.query('SELECT * FROM commercialflowsdayahead WHERE timestamp = :timestamp AND code = :code', {
        replacements: {timestamp: object1.timestamp, code: object1.code},
        model: db.commercialflowsdayahead,
        mapToModel:true
      });

      console.log('need to test object: ' + Object.keys(objectComparedTo));

      if(Object.keys(objectComparedTo).length === 0){
        console.log('ostvario se uslov :)')
        return commercialflowsdayahead.create(object1)
      }      
      else if(object1.value !== objectComparedTo[0].dataValues.value){
        return commercialflowsdayahead.update({value: object1.value}, {where:{id:objectComparedTo[0].dataValues.id}})
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
    //console.log('first country id ( from database ): ', firstCountryId)
    //console.log('second country id ( from database ): ', secondCountryId)
    for(let j = 0; j < result.length; j++){

        let object = {

            firstCountryId: firstCountryId.id,
            secondCountryId: secondCountryId.id,
            code: headers[i].substring(0, 2) + headers[i].substring(2, 4),
            displayCode: firstCountryId.displayCode + '-' + secondCountryId.displayCode,
            timestamp: result[j][timestamp],
            value: isNaN(result[j][headers[i]])? null: result[j][headers[i]] 
        }
    
          console.log('I want to see that empty object: \n', object)
          finalArray.push(compare(object))
        
    

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