var port = 80;
var express = require('express');
var favicon = require('serve-favicon')
var path = require('path')
var app = express();

app.use(favicon(path.join(__dirname, 'favicon.ico')))
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/scripts'));
app.use(express.static(__dirname + '/images'));
app.use(express.static(__dirname + '/style'));

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