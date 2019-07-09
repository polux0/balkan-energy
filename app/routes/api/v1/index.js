'use strict';

const auctionDailyController = require('../../../controllers/').auctionDailyController;

module.exports = (app) => {

  app.get('/api', (req, res) => res.status(200).send({
    message: 'Auction daily route!',
  }));

  app.post('/api/auction/daily/create', auctionDailyController.create);
  app.get('/api/auction/daily/', auctionDailyController.list);
};