var express = require('express')
var bodyParser = require('body-parser')
var app = express()

// reactify that shit

app.use(bodyParser.json())

require('./config/db')().init()
require('./config/routes')(app)

app.listen(3000)
console.log('Check localhost:3000')
