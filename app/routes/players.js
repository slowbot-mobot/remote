PlayersController = require('../controllers/players');

var playerRoutes = function(app) {

  app.get('/api/players', function(req, res){
    PlayersController(req, res).playerIndex();
  });

  app.get('/api/players/:_id', function(req, res){
    PlayersController(req, res).playerShow();
  });

  app.post('/api/players', function(req, res){
    PlayersController(req, res).playerCreate();
  });

  app.put('/api/players/:_id', function(req, res){
    PlayersController(req, res).playerUpdate();
  });

  app.delete('/api/players/:_id', function(req, res){
    PlayersController(req, res).playerDestroy();
  });

};

module.exports = playerRoutes;
