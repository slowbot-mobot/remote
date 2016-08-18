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

module.exports.createPlayer = function(player, limit){
  Player.create(cb);
};

