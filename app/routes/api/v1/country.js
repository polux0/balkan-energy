'use strict';

var express = require('express');
var router = express.Router();

const {country} = require('../../../models');



router.get('/:id', async (request, response, next) =>
{

    const id = request.params.id;
    let countryResult = await country.findOne({ where: { id: id } })
    response.status(200).json(countryResult);

})


module.exports = router;