'use strict'

const ftp = require('basic-ftp')
const {changes} = require('../models/')

async function fetch(location){

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
        await client.cd(`/test.balkanenergy.in.rs/dataupload/${location}`)
        const size = await client.size('auctions-auto-test.xls')
        const previous = await changes.findOne({where: {file_type: `${location}`}, order: [['createdAt', 'DESC']]}) 
        
        console.log('previous: ', previous)

        if(!previous){
            
            console.log('There are changes, import should be done')
            result = {

                file_type: `${location}`,
                filename: 'auction-auto-test',
                file_size: size,
                file_compared_to: previous == null? null : previous.id,
                file_should_be_imported: 'yes',
                file_imported: null
    
            }
        }
        else if(size === parseInt(previous.file_size)){
            
            console.log('Files are the same, there is no need for an import')

            result = {

                file_type: `${location}`,
                filename: 'auction-auto-test',
                file_size: size,
                file_compared_to: previous == null? null : previous.id,
                file_should_be_imported: 'no',
                file_imported: null
    
            }
        }
        else {
            console.log('There are changes, import should be done')
            result = {

                file_type: `${location}`,
                filename: 'auction-auto-test',
                file_size: size,
                file_compared_to: previous.id == null? null : previous.id,
                file_should_be_imported: 'yes',
                file_imported: null
    
            }

        }

        await client.downloadDir(`utils/scripts/${location}`)
        return result

    } catch (error) {
        client.close()
        throw new Error(error)
    }
}
module.exports = {fetch}
