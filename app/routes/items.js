ItemsController = require('../controllers/items');
var itemRoutes = function(app) {

  app.get('/api/items', function(req, res){
    ItemsController(req, res).itemIndex();
    //ItemsController(req, res).itemShow();
    //ItemsController(req, res).itemNew();
    //ItemsController(req, res).itemEdit();
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
