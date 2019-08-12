'use strict';

const express = require('express')
const bodyParser = require('body-parser');

const app = express()
const port = 3001

app.use(bodyParser.json());


const {country} = require('./models');
const {consumption} = require('./models');
const {auctionDaily} =  require('./models');
const {loadrealized} = require('./models')


require('./routes/api/v1/')(app);

app.get('/', async (req, res) =>
{
  // this should be function to extract from excel, prepare results in array, and then post to `auction/daily/create`
  // uzeti auction manual kao referentnu tačku; ( testirati na `auction-daily-sample-to-become`);

  var filename = "/src/utils/excel-parser-scripts/loadrealized/load-auto.xlsx";

  const XLXS = require('xlsx');

  const workbook = XLXS.readFile(filename);

  const sheetNameList = workbook.SheetNames;

  let resultingInsert = null;

  let countryId = null;
  

  // {header: 1} -> returns header as first array, results as anothers; 
  let toMap = XLXS.utils.sheet_to_json(workbook.Sheets[sheetNameList[0]], {header: 1});

  let result = XLXS.utils.sheet_to_json(workbook.Sheets[sheetNameList[0]]);

  let finalArray = [];

  let final;

  let headers = toMap[0].map(header => {

    // console.log('header: ', header)
    return header;
  })
  let timestamp = headers[0]
  headers.splice(0,1)
 
  for(let i = 0; i<headers.length; i++){
    countryId = await country.findOne({where:{code:headers[i]}})
    for(let j = 0; j < result.length; j++){
      finalArray.push({timestamp: result[i][timestamp] , countryId: countryId.id, value: result[i][headers[i]], automaticallyUpdated:0, createdAt: Date.now(), updatedAt: Date.now() })
    }
  }
  try
  {
    //84241
    const firstBulk = finalArray.splice(0, finalArray.length/2)
    const secondBulk = finalArray.splice(0, finalArray.length)
    let test = await loadrealized.bulkCreate(firstBulk)
    let anothertest = await loadrealized.bulkCreate(secondBulk)
    res.status(200).json('success');

  }
  catch (error)
  {

    console.log('Error occured while trying to insert `auction daily` data: ', error);
    res.status(400).json(error);
    
  }

//1. Excel ima manje kolona od te tabele u bazi - ucita to sto ima, ostale kolone u bazi ne dira
//2. Excel ima neku kolonu, tj novi header - napravi taj header ako nema, pa ucitaj

   
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`)) 