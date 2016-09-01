room = require('../models/room');

var RoomsController = function(req, res) {

  var roomIndex = function() {
    Room.all(function(err, rooms){
      if (err){
        throw err;
      }
      res.json(rooms);
    });
  };

  var roomCreate = function() {
    Room.create(req.body, function(err, room){
      if (err){
        return res.status(400).send({errors: err});
      }
      res.json(room);
    });
  };

  var roomUpdate = function() {
    Room.update(req.body, function(err, room){
      if (err){
        return res.status(400).send({errors: err});
      }
      res.json(room);
    });
  };

  var roomShow = function() {
    Room.show(req.body, function(err, room) {
      res.json(room);
    });
  };

  var roomDestroy = function() {
    var id = req.params._id;
    Room.destroy(id, function(err, room){
      if (err){
        throw err;
      }
      res.json(room);
    });
  };

  return {
    roomIndex: roomIndex,
    roomCreate : roomCreate,
    roomUpdate : roomUpdate,
    roomShow : roomShow,
    roomDestroy: roomDestroy
  };

};

module.exports = RoomsController;
