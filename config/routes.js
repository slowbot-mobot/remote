Item = require('../app/models/item')
Player = require('../app/models/player')
Room = require('../app/models/room')

ItemsController = require('../app/controllers/items')
PlayersController = require('../app/controllers/players')
RoomsController = require('../app/controllers/rooms')

module.exports = Router = function(app) {
  app.get('/', function(req, res){
    res.render('index', {})
  })

  require('../app/routes/items')(app)
  require('../app/routes/players')(app)
  require('../app/routes/rooms')(app)

}
