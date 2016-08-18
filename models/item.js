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
  create_date:{
    type: Date,
    default: Date.now
  }
});
var Item = module.exports = mongoose.model('Item', itemSchema);

module.exports.getItems = function(cb, limit){
  Item.find(cb).limit(limit);
};

module.exports.addItem = function(item, cb){
  Item.create(item, cb);
};

module.exports.updateItem = function(id, item, options, cb){
  var query = {_id: id};
  var update = {
    name: item.name,
    type: item.type,
    damage: item.damage,
    effect: item.effect,
    degree: item.degree
  };
  Item.findOneAndUpdate(query, update, options, cb);
};


module.exports.deleteItem = function(id, cb){
  var query = {_id: id};
  Item.remove(query, cb);
};
