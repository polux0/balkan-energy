const {changes} = require('../models');

const moment = require('moment');

module.exports = 
{
    
    async create(req, res)
    {   
    
        let result = null;

        try
        {
            result = await changes.create
            (
                {
                    file_type: req.body.file_type,
                    filename: req.body.filename,
                    file_size: req.body.file_size,
                    file_compared_to: req.body.file_compared_to,
                    file_imported: req.body.file_imported,
                    created_at: moment().utc().valueOf().format("YYYY-MM-DD HH:mm:ss"),
                    updated_at: moment().utc().valueOf().format("YYYY-MM-DD HH:mm:ss"),

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
            result = await changes.findAll();
            
        }
        catch (error)
        {

            return res.status(400).json(error);

        }
        
        return res.status(200).json(result);

    }

}