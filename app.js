var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
var db = mongoose.connection;

mongoose.connect('mongodb://localhost/adventure');

app.use(bodyParser.json());

Item = require('./models/item');

app.get('/', function(req, res){
  res.send('Hello, hauiofhsaohfidos.');
});

app.get('/api/items', function(req, res){
  Item.getItems(function(err, items){
    if (err){
      throw err;
    }
    res.json(items);
  });
});

app.post('/api/items', function(req, res){
  var item = req.body;
  Item.addItem(item, function(err, item){
    if (err){
      throw err;
    }
    res.json(item);
  });
});

app.put('/api/items/:_id', function(req, res){
  var id = req.params._id;
  var item = req.body;
  Item.updateItem(id, item, {}, function(err, item){
    if (err){
      throw err;
    }
    res.json(item);
  });
});

app.delete('/api/items/:_id', function(req, res){
  var id = req.params._id;
  Item.deleteItem(id, function(err, item){
    if (err){
      throw err;
    }
    res.json(item);
  });
});

app.listen(3000);
console.log('Check localhost:3000');
