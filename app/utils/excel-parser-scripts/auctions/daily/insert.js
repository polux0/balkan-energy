//1. Excel ima manje kolona od te tabele u bazi - ucita to sto ima, ostale kolone u bazi ne dira
//2. Excel ima neku kolonu, tj novi header - napravi taj header ako nema, pa ucitaj
var filename = "/src/utils/excel-parser-scripts/auctions/auctions-auto.xlsx";

const XLXS = require('xlsx');

const workbook = XLXS.readFile(filename);

const sheetNameList = workbook.SheetNames;


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

result.
//this works somehow, so, please, figure it out for whole solution;
console.log('heades before everything: ', headers);

// headers.map((header, counter) => {

//     if(header.startsWith('capacity')){

//       let countries = header.substring(header.length - 4, header.length);

//       let derivedCountries = `price${countries}`;

      
//       result.map(async value => {

//         let firstCountryId, secondCountryId, resultingInsert;

//         try 
//         {

//            firstCountryId = await country.findOne(
//            {
//               where:
//               {
//                 code:derivedCountries.substring(derivedCountries.length-4, derivedCountries.length-2)
//               }

//             });
    
//             secondCountryId = await country.findOne(
//             {
//               where:
//               {
//                 code: derivedCountries.substring(derivedCountries.length-2, derivedCountries.length)
//               }

//             });

//         }
//         catch (error)
//         {
          
//           console.log('there is a problem with fetching id for country `from` and country `to` ', error);
//           res.status(400).json(error);
//         }

//         let object = {

//              firstCountryId: firstCountryId.id,
//              secondCountryId: secondCountryId.id,
//              code: `${countries}`,
//              displayCode: `auction daily ${countries}`,
//              timestamp: value[timestamp],
//              capacity: value[header],
//              value: value[derivedCountries]

//         }

//           finalArray.push(object);

//         try
//         {
//           resultingInsert = await auctionDaily.bulkCreate(finalArray);
//           console.log('finished' + resultingInsert)

//         }
//         catch (error)
//         {

//           console.log('Error occured while trying to insert `auction daily` data: ', error);
//           res.status(400).json(error);
          
//         }
        
//       })

//     }
//   })