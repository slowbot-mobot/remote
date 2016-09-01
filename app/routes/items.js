ItemsController = require('../controllers/items');

var itemRoutes = function(app) {

  app.get('/api/items', function(req, res){
    ItemsController(req, res).itemIndex();
  });

  app.get('/api/items/:_id', function(req, res){
    ItemsController(req, res).itemShow();
  });

  app.post('/api/items', function(req, res){
    ItemsController(req, res).itemCreate();
  });

  app.put('/api/items/:_id', function(req, res){
    ItemsController(req, res).itemUpdate();
  });

  app.delete('/api/items/:_id', function(req, res){
    ItemsController(req, res).itemDestroy();
  });

};

module.exports = itemRoutes;
