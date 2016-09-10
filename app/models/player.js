var mongoose = require('mongoose');

var playerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  Str: {
    type: Number,
    required: true
  },
  Int: {
    type: Number,
    required: true
  },
  Wis: {
    type: Number,
    required: true
  },
  Dex: {
    type: Number,
    required: true
  },
  Cha: {
    type: Number,
    required: true
  },
  Con: {
    type: Number,
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
