const {loadforecast} = require('../models');

const moment = require('moment');

module.exports = 
{
    
    async list(req, res)
    {
        let result = null;
        
        try
        {
            result = await loadforecast.findAll({where:{countryId:36}});
            
        }
        catch (error)
        {

            return res.status(400).json(error);

        }
        
        return res.status(200).json(result);

    }

}