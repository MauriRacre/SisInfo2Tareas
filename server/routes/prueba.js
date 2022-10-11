module.exports = function(app){
  var pruebaCtrl = require('../controllers/prueba');

  app.route('/api/prueba').get(pruebaCtrl.getPrueba);
}
