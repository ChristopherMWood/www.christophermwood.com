var port = 80;
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/scripts'));

app.get('/', function (request, response) {
  response.sendFile('/index.html');
});

app.get('/test', function (request, response) {
  response.send('testing');
});

app.use(function(req, res, next) {
  return res.status(404).send({ message: 'Route'+req.url+' Not found.' });
});

app.use(function(err, req, res, next) {
  return res.status(500).send({ error: err });
});

app.listen(port, function () {
  console.log('Site started on port ' + port);
});