'use strict';

const controllers = require('../../../controllers/');

module.exports = (app) => {

  app.get('/api', (req, res) => res.status(200).send({
    message: 'Auction daily route!',
  }));

  app.post('/api/auction/daily/create', controllers.auctionController.create);
  app.get('/api/auction/daily/', controllers.auctionController.list);
  app.get('/api/load/realized', controllers.loadRealizedController.list)
  app.get('/api/load/forecast', controllers.loadForecastController.list)
  app.get('/api/changes', controllers.changesController.list)

};