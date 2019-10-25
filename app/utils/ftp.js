'use strict'

const ftp = require('basic-ftp')

async function fetch(){

    const client = new ftp.Client()
    client.ftp.verbose = true
    try {
        await client.access({
            host: 'ftp.balkanenergy.in.rs',
            user: 'marko@balkanenergy.in.rs',
            password: 'markomarko323',
            secure: false
        })
        await client.cd('/test.balkanenergy.in.rs/dataupload/')
        await client.list()
        //let files = await client.downloadDir('utils/excel-parser-scripts/auctions/test')
        const file = await client.download('utils/excel-parser-scripts/auctions/test', 'auctions-auto.xls')

    } catch (error) {
        console.log('error happend: ', error)
        client.close()
    }
}

module.exports = {fetch}
