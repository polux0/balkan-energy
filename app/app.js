//to-do: 

//1. RS1 header -> ne bi trebalo da bude vezano za country tabel-u, tj. ako ne postoji id sa tim header-om u bazi! ( razmisliti )
//2. napraviti spot-turnover po naliku na spot
//3. napraviti tabelu koja sadrzi sve tipove i njihove subtype-ove ()

//imports to do:

//
// 1. spot
// 2. spot-turnover ( same as 1.)
// 3. temperature ( same as 1.)
// 4. consumption 
// 5. production ( same as 4.)
// 6. !!! futures !!!
// 7. production per block? ( new one ) -> default value 0, not NULL; * 
// 8. maintances ( new one ) ovo bi trebalo da bude vezano za production per block;

'use strict';

const express = require('express')
const bodyParser = require('body-parser');

const app = express()
const port = 3001

app.use(bodyParser.json());


const {country} = require('./models');
const {commercialflows} = require('./models')
const {auctionDaily} = require('./models')

//ftp test; 

const ftpTest = require('./utils/ftp');

const auctionTest = require('./utils/scripts/auctions')


require('./routes/api/v1/')(app);

app.get('/', async (req, res) =>
{

    await ftpTest.fetch('auction-modified-test')
    //await auctionTest.importMe();
    res.status(200).json('/ route request successfull');
    
});

app.get('/ftp', async (req, res) => {

  await ftpTest.fetch('auction-update-test')
  res.status(200).json('ftp-end-point is all right');
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`)) 