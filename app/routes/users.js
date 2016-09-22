UsersController = require('../controllers/users');

var userRoutes = function(app) {

  app.get('/api/users', function(req, res){
    UsersController(req, res).userIndex();
  });

  app.get('/api/users/:_id', function(req, res){
    UsersController(req, res).userShow();
  });

  app.post('/api/users', function(req, res){
    UsersController(req, res).userCreate();
  });

  app.put('/api/users/:_id', function(req, res){
    UsersController(req, res).userUpdate();
  });

  app.delete('/api/users/:_id', function(req, res){
    UsersController(req, res).userDestroy();
  });

};

module.exports = userRoutes;
