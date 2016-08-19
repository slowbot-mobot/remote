Item = require('../app/models/item');
Player = require('../app/models/player');
Room = require('../app/models/room');

ItemsController = require('../app/controllers/items');
PlayersController = require('../app/controllers/players');

var Router = function(app) {
  app.get('/', function(req, res){
    res.send('Hello, hauiofhsaohfidos.');
  });

  require('../app/routes/items')(app);
  require('../app/routes/players')(app);

};

module.exports = Router;
