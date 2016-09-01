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

  var itemCreate = function() {
    Item.create(req.body, function(err, item){
      if (err){
        return res.status(400).send({errors: err});
      }
      res.json(item);
    });
  };

  var itemUpdate = function() {
    Item.update(req.body, function(err, item){
      if (err){
        return res.status(400).send({errors: err});
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
    Item.destroy(id, function(err, item){
      if (err){
        throw err;
      }
      res.json(item);
    });
  };

  return {
    itemIndex: itemIndex,
    itemCreate : itemCreate,
    itemUpdate : itemUpdate,
    itemShow : itemShow,
    itemDestroy: itemDestroy
  };

};

module.exports = ItemsController;
