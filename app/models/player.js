var mongoose = require('mongoose');

var playerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  profession: {
    type: String,
    required: true
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

var Player = mongoose.model('Player', playerSchema);

Player.all = function(cb, limit){
  Player.find(cb)
      .limit(limit);
};

Player.show = function(opts, cb){
  Player.findOne(opts, cb);
};

Player.destroy = function(opts, cb){
  Player.findOneAndRemove(opts, cb);
};

module.exports = Player;
