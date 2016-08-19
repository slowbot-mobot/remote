var mongoose = require('mongoose');

var playerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  create_date:{
    type: Date,
    default: Date.now
  }
});

var Player = module.exports = mongoose.model('Player', playerSchema);

module.exports.getPlayer = function(cb, limit){
  Player.find(cb).limit(limit);
};

module.exports.getPlayers = function(cb, limit){
  PlayeR.find(cb).limit(limit);
};

module.exports.createPlayer = function(player, limit){
  Player.create(cb);
};

module.exports.updatePlayer = function(id, player, options, cb){
  var query = {_id: id};
  var update = {
    name: player.name,
  };
  Player.findOneAndUpdate(query, update, options, cb);
};

module.exports.deletePlayer = function(id, cb){
  var query = {_id: id};
  Player.remove(query, cb);
};
