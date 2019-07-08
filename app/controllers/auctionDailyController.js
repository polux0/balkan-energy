const auctionDaily = require('../models/').auctionDaily;

const moment = require('moment');

module.exports = 
{
    
    async create(req, res)
    {   
    
        const result = null;

        try
        {
            result = await auctionDaily.create
            (
                {
                    firstCountryId: req.body.firstCountryId,
                    secondCountryId: req.body.secondCountryId,
                    code: req.body.code,
                    displayCode: req.body.displayCode,
                    timestamp: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
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
        console.log('result: ', result);
        return res.status(200).json(result);
    }

}