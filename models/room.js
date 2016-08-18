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

module.exports.getItems = function(cb, limit){
  Room.find(cb).limit(limit);
};
