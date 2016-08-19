var playerRoutes = function(app) {

  app.get('/api/Players', function(req, res){
    PlayersController(req, res).index();
  });

  app.post('/api/Players', function(req, res){
    PlayersController(req, res).create();
  });

  app.put('/api/Players/:_id', function(req, res){
    PlayersController(req, res).show();
  });

  app.delete('/api/Players/:_id', function(req, res){
    PlayersController(req, res).destroy();
  });

};

module.exports = playerRoutes;
