const {auctionDaily} = require('../models/');

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

    }

}