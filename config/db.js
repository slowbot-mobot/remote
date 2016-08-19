var Db = function() {
  return {
    init: function() {
      var mongoose = require('mongoose');
      mongoose.connect('mongodb://localhost/adventure');
    }
  };
};

module.exports = Db;
