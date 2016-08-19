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

  var itemCreate = function() {
    Item.create(req.body, function(err, item){
      if (err){
        throw err;
      }
      res.json(item);
    });
  };

  var itemEdit = function() {
    res.html("<h1>Edit a Item</h1");
  };

  var itemUpdate = function() {
    Item.update(req.body, function(err, item){
      if (err){
        throw err;
      }
      res.json(item);
    });
  };

  var itemShow = function() {
    Item.show(req.body, function(err, item) {
      res.json(item);
    });
  };

  var itemDestroy = function() {
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
    itemCreate : itemCreate,
    itemEdit : itemEdit,
    itemUpdate : itemUpdate,
    itemShow : itemShow,
    itemDestroy: itemDestroy
  };

};

module.exports = ItemsController;

