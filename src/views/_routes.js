module.exports = function(app){

  app.get('/', function (request, response) {
    response.sendFile(getViewRoute('index'));
  });

  app.get('/software', function (request, response) {
    response.sendFile(getViewRoute('software'));
  });

  app.use(function (request, response, next) {
    response.sendFile(getViewRoute('404'));
  });
 
  function getViewRoute(filename) {
    return __dirname + '/' + filename + '.html';
  }

}
