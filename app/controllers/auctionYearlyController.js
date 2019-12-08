'use strict;'

const {auctionYearly, changes} = require('../models');
const ftp = require('../utils/ftp');
const auctionYearlyImport = require('../utils/scripts/source/auctions-monthly');

const moment = require('moment');

module.exports = 
{
    
    async create(req, res)
    {   
    
        let result = null;

        try
        {
            result = await auctionYearly.create
            (
                {
                    firstCountryId: req.body.firstCountryId,
                    secondCountryId: req.body.secondCountryId,
                    code: req.body.code,
                    displayCode: req.body.displayCode,
                    //fixed for now; 
                    timestamp: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
                    //
                    capacity: req.body.capacity,
                    atc: req.body.atc,
                    value: req.body.value,
                    measure1: req.body.measure1,
                    measure2: req.body.measure2
                }
            );

        } 
        catch (error) 
        {

            return res.status(400).json(error);

        }

        return res.status(200).json(result);
    },
    

    async list(req, res)
    {
        let result = null;
        
        try
        {
            result = await auctionYearly.findAll();
            
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
            result = await ftp.fetch('auctions-monthly', 'auctions-manual', 1)
            result.createdAt = moment().format('YYYY-MM-DD HH:mm:ss')
            result.updatedAt = moment().format('YYYY-MM-DD HH:mm:ss')
            if(result.file_should_be_imported == 'yes'){
                await auctionMonthlyImport.importMe()
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