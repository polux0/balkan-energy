'use strict'

const ftp = require('basic-ftp')

async function fetch(location, filename){

    let result = null;
    const client = new ftp.Client()
    client.ftp.verbose = true
    try {
        await client.access({
            host: 'ftp.balkanenergy.in.rs',
            user: 'marko@balkanenergy.in.rs',
            password: 'markomarko323',
            secure: false
        })
        console.log('mozda i radi: ', await client.pwd())
    }
    catch(error){
        console.log('something is wrong, definitely: ', error)
    }
    client.close();
}
module.exports={fetch}