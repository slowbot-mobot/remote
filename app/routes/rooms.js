RoomsController = require('../controllers/rooms');

var roomRoutes = function(app) {

  app.get('/api/rooms', function(req, res){
    RoomsController(req, res).roomIndex();
  });

  app.get('/api/rooms/:_id', function(req, res){
    RoomsController(req, res).roomShow();
  });

  app.post('/api/rooms', function(req, res){
    RoomsController(req, res).roomCreate();
  });

  app.put('/api/rooms/:_id', function(req, res){
    RoomsController(req, res).roomUpdate();
  });

  app.delete('/api/rooms/:_id', function(req, res){
    RoomsController(req, res).roomDestroy();
  });

};

module.exports = roomRoutes;
