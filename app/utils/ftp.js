'use strict'

const ftp = require('basic-ftp')

async function fetch(location){

    const client = new ftp.Client()
    client.ftp.verbose = true
    try {
        await client.access({
            host: 'ftp.balkanenergy.in.rs',
            user: 'marko@balkanenergy.in.rs',
            password: 'markomarko323',
            secure: false
        })
        await client.cd(`/test.balkanenergy.in.rs/dataupload/${location}`)
        await client.list()
        await client.downloadDir(`utils/scripts/${location}`)

    } catch (error) {
        console.log('error happend: ', error)
        client.close()
    }
}

module.exports = {fetch}
