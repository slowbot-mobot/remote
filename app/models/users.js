var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

var User = mongoose.model('Item', userSchema);

User.all = function(cb, limit){
  User.find(cb)
      .limit(limit);
};

User.show = function(opts, cb){
  User.findOne(opts, cb);
};

User.destroy = function(opts, cb){
  User.findOneAndRemove(opts, cb);
};

module.exports = User;
