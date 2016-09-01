var mongoose = require('mongoose');

var itemSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

var Item = mongoose.model('Item', itemSchema);

Item.all = function(cb, limit){
  Item.find(cb)
      .limit(limit);
};

Item.show = function(opts, cb){
  Item.findOne(opts, cb);
};

Item.destroy = function(opts, cb){
  Item.findOneAndRemove(opts, cb);
};

module.exports = Item;
