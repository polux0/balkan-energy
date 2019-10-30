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
        const size = await client.size('auctions-auto-test.xls')
        await client.downloadDir(`utils/scripts/${location}`)
        const result = {

            file_type: 'auctions',
            filename: 'auction-auto-test',
            file_size: size,
            file_compared_to: 'imagine',
            file_imported: null

        }
        return result

    } catch (error) {
        client.close()
        throw new Error(error)
    }
}
module.exports = {fetch}
