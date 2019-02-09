var port = 3000;
var express = require('express');
var path = require('path')
var favicon = require('serve-favicon')
var app = express();

app.use(favicon(path.join(__dirname, 'favicon.ico')))
app.use(express.static(__dirname + '/src/views'));
app.use(express.static(__dirname + '/style'));
app.use(express.static(__dirname + '/scripts'));
app.use(express.static(__dirname + '/images'));
app.use(express.static(__dirname + '/public'));
require('./src/routes/api.js')(app);
require('./src/views/_routes.js')(app);

app.listen(port, function () {
  console.log('Site started on port ' + port);
});