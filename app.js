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

app.get('*', function(request, response){
  response.sendFile('/404.html');
});

app.listen(port, function () {
  console.log('Site started on port ' + port);
});