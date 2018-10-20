var port = 80;
var express = require('express');
var path = require('path')
var favicon = require('serve-favicon')
var app = express();

app.use(favicon(path.join(__dirname, 'favicon.ico')))
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/style'));
app.use(express.static(__dirname + '/scripts'));
app.use(express.static(__dirname + '/images'));
app.use(express.static(__dirname + '/public'));
require('./routes.js')(app);

app.listen(port, function () {
  console.log('Site started on port ' + port);
});