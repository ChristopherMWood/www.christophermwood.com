module.exports = function(app){

  app.route('/contact')
  .get((req, res, next) => {
    console.log('request from: ' + req.originalUrl);
    console.log('request type: ' + req.method);
    next();
  }, (req, res, next) => {
    res.send('GET: Christopher Wood')
  });

  app.route('/contact').post((req, res) => res.send('POST: Christopher Wood'));

  app.route('/contact/:contactId')
  .put((req, res) => res.send('PUT: Christopher Wood'))
  .delete((req, res) => res.send('DELETE: Christopher Wood'));

}
  