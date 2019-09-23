'use strict'

const ftp = require('basic-ftp')
const fs = require('fs')

async function example(){

    const client = new ftp.Client()
    client.ftp.verbose = true
    try {
        await client.access({
            host: 'ftp.balkanenergy.in.rs',
            user: 'marko@balkanenergy.in.rs',
            password: 'markomarko323',
            secure: false
        })
        await client.cd('/test.balkanenergy.in.rs/auctions/')
        await client.list()
        let files = await client.downloadDir('utils/excel-parser-scripts/auctions/test')

    } catch (error) {
        console.log('error happend: ', error)
        client.close()

        // return client; 
    }
}

module.exports = {example}
//ftp credentials;
// Host/Ftp: ftp.balkanenergy.in.rs
// Username: marko@balkanenergy.in.rs
// Password: markomarko323
// Lokacija: test.balkanenergy.in.rs/dataupload/auctions-auto.xlsx

