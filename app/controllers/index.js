const auctionDailyController = require('./auctionDailyController');
const auctionMonthlyController = require('./auctionMonthlyController');
const auctionYearlyController = require('./auctionYearlyController')
const loadRealizedController = require('./loadRealizedController');
const loadForecastController = require('./loadForecastController');
const changesController = require('./changesController');
const commercialFlowsDayAheadController = require('./commercialFlowsDayAheadController')
const commercialFlowsController = require('./commercialFlowsController');

module.exports = {

    auctionDailyController,
    auctionMonthlyController,
    auctionYearlyController,
    loadRealizedController,
    loadForecastController,
    changesController,
    commercialFlowsDayAheadController,
    commercialFlowsController
    
};