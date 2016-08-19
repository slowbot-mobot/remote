var itemRoutes = function(app) {

  app.get('/api/items', function(req, res){
    ItemsController(req, res).index();
  });

  app.post('/api/items', function(req, res){
    ItemsController(req, res).create();
  });

  app.put('/api/items/:_id', function(req, res){
    ItemsController(req, res).show();
  });

  app.delete('/api/items/:_id', function(req, res){
    ItemsController(req, res).destroy();
  });

};

module.exports = itemRoutes;
