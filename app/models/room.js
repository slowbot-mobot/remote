var mongoose = require('mongoose');

var roomSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  create_date:{
    type: Date,
    default: Date.now
  }
});
var room = module.exports = mongoose.model('Room', roomSchema);

module.exports.getRoom = function(cb, limit){
  Room.find(cb).limit(limit);
};

module.exports.createRoom = function(room, limit){
  Room.create(cb);
};

module.exports.updateRoom = function(id, room, options, cb){
  var query = {_id: id};
  var update = {
    name: room.name,
  };
  room.findOneAndUpdate(query, update, options, cb);
};

module.exports.deletePlayer = function(id, cb){
  var query = {_id: id};
  Room.remove(query, cb);
};
