'use strict';
//changed to sandbox in order to test it ( change to production when you are finished)
var filename = "/src/utils/scripts/data/production/commercial-total/commercial-total.xls";
const XLXS = require('xlsx');
const workbook = XLXS.readFile(filename);
const sheetNameList = workbook.SheetNames;
let firstCountryId = null;
let secondCountryId = null;
const {commercialflows} = require('../../../../models')
const {country} = require('../../../../models') 
const db = require('../../../../models/index')

// update should be fixed - it doesn't work;
async function compare(object1){

  let objectComparedTo = null;
  
       objectComparedTo = await db.sequelize.query('SELECT * FROM commercialflows WHERE timestamp = :timestamp AND code = :code', {
        replacements: {timestamp: object1.timestamp, code: object1.code},
        model: db.commercialflows,
        mapToModel:true
      });

      if(typeof objectComparedTo[0] === 'undefined'){
        return commercialflows.create(object1)
      }     
      else if(object1.value !== objectComparedTo[0].dataValues.value){
        return commercialflows.update({value: object1.value}, {where:{id:objectComparedTo[0].dataValues.id}})
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

//console.log('headers :\n', headers);

for(let i = 0; i<headers.length; i++){

try {

    firstCountryId = await country.findOne({where:{code:headers[i].substring(0, 2)}})
    secondCountryId = await country.findOne({where:{code:headers[i].substring(2, 4)}})

    for(let j = 0; j < result.length; j++){

        console.log('first country id: ', firstCountryId.dataValues.id);
        console.log('second country id: ', secondCountryId.dataValues.id);
        
        let object = {

            firstCountryId: firstCountryId.id,
            secondCountryId: secondCountryId.id,
            // firstCountryId: firstCountryId.dataValues.id,
            // secondCountryId: secondCountryId.dataValues.id,
            code: headers[i].substring(0, 2) + headers[i].substring(2, 4),
            displayCode: firstCountryId.displayCode + '-' + secondCountryId.displayCode,
            timestamp: result[j][timestamp],
            value: isNaN(result[j][headers[i]])? null: result[j][headers[i]] 
        }
        console.log('value \n' + result[j][headers[i]])
        finalArray.push(compare(object))
        
    }
    
} 
catch (error) {
    console.log('error: ', error)
}
}
try
{
let test = await commercialflows.bulkCreate(finalArray);
}
catch(error){
    console.log('error happend during insertion of commercial flows \n', error);
}

}
module.exports = {importMe}