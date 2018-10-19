var port = 80;
var express = require('express');
var app = express();

var favicon = require('serve-favicon')
var path = require('path')

app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/scripts'));
app.use(express.static(__dirname + '/images'));
app.use(express.static(__dirname + '/style'));
app.use(express.static(__dirname + '/public'));
app.use(favicon(path.join(__dirname, 'favicon.ico')))

app.get('/', function (request, response) {
  response.sendFile('/index.html');
});

app.get('/test', function (request, response) {
  response.send('testing');
});

app.get('*', function(req, res){
  res.status(404);
  response.render('/404.html');
});

app.use(function(err, req, res, next) {
  return res.status(500).send({ error: err });
});

app.listen(port, function () {
  console.log('Site started on port ' + port);
});