Item = require('../models/item');

var ItemsController = function(req, res) {

  var itemIndex = function() {
    Item.all(function(err, items){
      if (err){
        throw err;
      }
      res.json(items);
    });
  };

  var itemNew = function() {
    res.html("<h1>Create a Item</h1");
  };

  var create = function() {
    Item.create(req.body, function(err, item){
      if (err){
        throw err;
      }
      res.json(item);
    });
  };

  var ItemEdit = function() {
    res.html("<h1>Edit a Item</h1");
  };

  var update = function() {
    Item.update(req.body, function(err, item){
      if (err){
        throw err;
      }
      res.json(item);
    });
  };

  var show = function() {
    Item.show(req.body, function(err, item) {
      res.json(item);
    });
  };

  var destroy = function() {
    var id = req.params._id;
    Item.deleteItem(id, function(err, item){
      if (err){
        throw err;
      }
      res.json(item);
    });
  };

  return {
    // ACTION   HTTP METHOD     URL
    // ---------------------------------------------
    // index    get             /api/items
    itemIndex: itemIndex,

    // new      get             /api/items/new
    itemNew: itemNew,
  };

};

module.exports = ItemsController;

