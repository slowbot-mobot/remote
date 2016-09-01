player = require('../models/player');

var PlayersController = function(req, res) {

  var playerIndex = function() {
    Player.all(function(err, players){
      if (err){
        throw err;
      }
      res.json(players);
    });
  };

  var playerCreate = function() {
    Player.create(req.body, function(err, player){
      if (err){
        return res.status(400).send({errors: err});
      }
      res.json(player);
    });
  };

  var playerUpdate = function() {
    Player.update(req.body, function(err, player){
      if (err){
        return res.status(400).send({errors: err});
      }
      res.json(player);
    });
  };

  var playerShow = function() {
    Player.show(req.body, function(err, player) {
      res.json(player);
    });
  };

  var playerDestroy = function() {
    var id = req.params._id;
    Player.destroy(id, function(err, player){
      if (err){
        throw err;
      }
      res.json(player);
    });
  };

  return {
    playerIndex: playerIndex,
    playerCreate : playerCreate,
    playerUpdate : playerUpdate,
    playerShow : playerShow,
    playerDestroy: playerDestroy
  };

};

module.exports = PlayersController;
