'use strict';

var express = require('express');
var router = express.Router();

const {consumption} = require('../../../models');



router.get('/:id', async (request, response, next) =>
{

    const id = request.params.id;
    let consumptionResult = await consumption.findOne({ where: { id: id } })
    response.status(200).json(consumptionResult);

})

module.exports = router;