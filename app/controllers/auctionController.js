'use strict;'

const {auctionDaily, changes} = require('../models');
const ftp = require('../utils/ftp');
const auctionTest = require('../utils/scripts/auctions/');

const moment = require('moment');

module.exports = 
{
    
    async create(req, res)
    {   
    
        let result = null;

        try
        {
            result = await auctionDaily.create
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
            result = await auctionDaily.findAll();
            
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
            result = await ftp.fetch('auction-update-test', 'auctions-auto')
            result.createdAt = moment().format('YYYY-MM-DD HH:mm:ss')
            result.updatedAt = moment().format('YYYY-MM-DD HH:mm:ss')
            if(result.file_should_be_imported == 'yes'){
                await auctionTest.importMe()
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
            result.file_imported = 'no';
            final = await changes.create(result)
            return res.status(400).json(''+error);

        }
        

    }

}