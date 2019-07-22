'use strict';

const express = require('express')
const bodyParser = require('body-parser');

const app = express()
const port = 3001

app.use(bodyParser.json());


const {country} = require('./models');
const {consumption} = require('./models');
const {auctionDaily} =  require('./models');


require('./routes/api/v1/')(app);


// const sequelize = new Sequelize(process.env.MYSQL_DATABASE, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, 
// {
//   host: process.env.MYSQL_HOST,
//   port: '3306',
//   dialect: 'mysql',
//   pool: 
//   {
//     max: 10,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   },
//   define: {
//     freezeTableName: true
//   }
  
// });
app.get('/', async (req, res) =>
{
  // this should be function to extract from excel, prepare results in array, and then post to `auction/daily/create`
  // uzeti auction manual kao referentnu tačku; ( testirati na `auction-daily-sample-to-become`);

  var filename = "/src/utils/excel-parser-scripts/auction-daily-sample-to-become.xlsx";

  const XLXS = require('xlsx');

  const workbook = XLXS.readFile(filename);

  const sheetNameList = workbook.SheetNames;
  

  // {header: 1} -> returns header as first array, results as anothers; 
  let toMap = XLXS.utils.sheet_to_json(workbook.Sheets[sheetNameList[0]], {header: 1});
  //

  let result = XLXS.utils.sheet_to_json(workbook.Sheets[sheetNameList[0]]);

  let finalArray = [];

  let headers = toMap[0].map(header => {

    return header;
  })
  // list all by headers;

  headers.map((header, counter) => {

    // if(header == 'timestamp'){

    //   console.log('timestamp header should be intact: ', header);

    // }
    // else console.log('header, id`s of countries: ', header.substring(header.length - 4, header.length));
  })

  let timestamp = headers[0];

  //try to sort an array; 

  let testArray = ['capacity12', 'price21', 'price32', 'capacity21', 'capacity32', 'price12'];
  //let testArray = ['price21', 'capacity12', 'price32', 'capacity21', 'capacity32', 'price12'];


  console.log('test array before sorting: ');
  console.log(testArray);

  for(let i=0; i< testArray.length; i++){

    if(testArray[i].startsWith('capacity'))
    {
      let swap;
      let ids = testArray[i].substring(testArray[i].length - 2, testArray[i].length);

        for(let j = i+1, k = i+1; k < testArray.length; k++)
        {
          if(testArray[k].startsWith('price') && testArray[k].substring == ids){

            swap = testArray[j];
            testArray[j] = testArray[k];
            testArray[k] = swap;
            console.log('swapped');            
          }
        }
    }
    else if(testArray[i].startsWith('price'))
    {
      let ids1 = testArray[i].substring(testArray[i].length - 2, testArray[i].length);
      let anotherSwap;

        for(let l = i+1, m = i+1; m<testArray.length; m++)
        {
          if(testArray[l].startsWith('capacity') && testArray[l].substring == ids1)
          {
           swap = testArray[l];
           testArray[l] = testArray[m];
           testArray[m] = swap;
           console.log('swapped');
          }
        }
      
    }
  }

  console.log('Array after sorting: ', testArray);

  // for(let i = 0; i<headers.length; i++){

  // }

  // result.map(value => {
  //   console.log(value[capacityHURS]);
  // })
  // result.map(value => {
  //   // console.log('value for header: capacityHURS: ', value[capacityHURS]);
  //   console.log('value for header: priceHURS: ', value[priceHURS]);

  // })

  // begin of working something; 
  // for(let a=0;a<headers.length;a++){

  //   let timestamp = headers[1];

  //   result.map(element => {
  

  //     console.log(element[timestamp]);
    
  //   })

  // }

  // end of working something; 

  // toMap.map((element, counter) => {

  //   // console.log('Element: ');
  //   console.log(element);

  //   //structure; 
  //   // result = await auctionDaily.create
  //   //         (
  //   //             {
  //   //                 firstCountryId: req.body.firstCountryId,
  //   //                 secondCountryId: req.body.secondCountryId,
  //   //                 code: req.body.code,
  //   //                 displayCode: req.body.displayCode,
  //   //                 //fixed for now; 
  //   //                 timestamp: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
  //   //                 //
  //   //                 capacity: req.body.capacity,
  //   //                 atc: req.body.atc,
  //   //                 value: req.body.value,
  //   //                 measure1: req.body.measure1,
  //   //                 measure2: req.body.measure2
  //   //             }
  //   //         );

  //   // if(counter > 1)
  //   // {
  //   //   finalArray.push({timestamp: element.timestamp, capacity:element.capacityHURS, price:element.priceHURS}, {timestamp:element.timestamp, capacity:element.capacityRSHU , price:element.priceRSHU  });
  //   //   // return AuctionDaily.create({
  //   //     // timestamp:...
  //   //   // });
  //   // }
  //   // finalArray.push({timestamp: element.timestamp, capacity:element.capacityHURS, price:element.priceHURS}, {timestamp:element.timestamp, capacity:element.capacityRSHU , price:element.priceRSHU  });
   

  // })

  // console.log('Final array: \n');
  // console.log(finalArray);
 
  res.status(200).send('eh');
  
  // this should be function in order to extract from excel, prepare results in array, and then post to `auction/daily/create`


  // sequelize
  // .authenticate()
  // .then(() => {
  //   console.log('Connection has been established successfully.');

  // })
  // .catch(err => {
  //   console.error('Unable to connect to the database:', err);
  //   res.send(err);
  // })
  // .then(()=> {
  //   res.send('Testing sequelizer: sucess');
  // })
   
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`)) 