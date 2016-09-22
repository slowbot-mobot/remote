User = require('../models/user');

var UsersController = function(req, res) {

  var userIndex = function() {
    User.all(function(err, users){
      if (err){
        throw err;
      }
      res.json(users);
    });
  };

  var userCreate = function() {
    User.create(req.body, function(err, user){
      if (err){
        return res.status(400).send({errors: err});
      }
      res.json(user);
    });
  };

  var userUpdate = function() {
    User.update(req.body, function(err, user){
      if (err){
        return res.status(400).send({errors: err});
      }
      res.json(user);
    });
  };

  var userShow = function() {
    User.show(req.body, function(err, user) {
      res.json(user);
    });
  };

  var userDestroy = function() {
    var id = req.params._id;
    User.destroy(id, function(err, user){
      if (err){
        throw err;
      }
      res.json(user);
    });
  };

  return {
    userIndex: userIndex,
    userCreate : userCreate,
    userUpdate : userUpdate,
    userShow : userShow,
    userDestroy: userDestroy
  };

};

module.exports = UsersController;
