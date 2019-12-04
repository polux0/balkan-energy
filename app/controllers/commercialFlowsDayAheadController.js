'use strict;'

const {commercialflowsdayahead, changes} = require('../models');
const commercialflowsdayaheadTest = require('../utils/scripts/commercial-flows-dayahead');
const ftp = require('../utils/ftp');


const moment = require('moment');

module.exports = 
{
    
    async list(req, res)
    {
        let result = null;
        
        try
        {
            result = await commercialflowsdayahead.commercialflows({where:{countryId:36}});
            
        }
        catch (error)
        {

            return res.status(400).json(error);

        }
        
        return res.status(200).json(result);

    },
    async import(req, res)
    {
        let result = null
        let final = null

        try
        {
            result = await ftp.fetch('commercial-dayahead-update-test', 'commercial-dayahead')
            result.createdAt = moment().format('YYYY-MM-DD HH:mm:ss')
            result.updatedAt = moment().format('YYYY-MM-DD HH:mm:ss')
            if(result.file_should_be_imported == 'yes'){
                await commercialflowsdayaheadTest.importMe()
                result.file_imported = 'yes';
                final = await changes.create(result)
                return res.status(200).json(final);
            }
            else {
                await changes.create(result)
                return res.status(200).json('Everything is up to date!')
            }
            
        }
        catch (error)
        {   
            //catch doesn't see this;
            result.createdAt = moment().format('YYYY-MM-DD HH:mm:ss')
            result.updatedAt = moment().format('YYYY-MM-DD HH:mm:ss')
            result.file_should_be_imported = 'yes'
            result.file_imported = 'no'
            final = await changes.create(result)
            console.log('Something is wrong, obviously: ', error)
            return res.status(400).json(''+error);

        }
        

    }

}