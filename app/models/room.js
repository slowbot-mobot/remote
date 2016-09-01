var mongoose = require('mongoose');

var roomSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  size: {
    type: String,
    required: true
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

var Room = mongoose.model('Room', roomSchema);

Room.all = function(cb, limit){
  Room.find(cb)
      .limit(limit);
};

Room.show = function(opts, cb){
  Room.findOne(opts, cb);
};

Room.destroy = function(opts, cb){
  Room.findOneAndRemove(opts, cb);
};

module.exports = Room;
