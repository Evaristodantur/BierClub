var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('BierClub');
});

/* GET Productos page. */
router.get('/productos', function(req, res, next) {
  res.render('productos');
});

/* GET Promociones page. */
router.get('/promociones', function(req, res, next) {
  res.render('promociones');
});

/* GET Envios page. */
router.get('/envios', function(req, res, next) {
  res.render('envios');
});

/* GET Quienes Somos page. */
router.get('/quienes_somos', function(req, res, next) {
  res.render('quienes_somos');
});

/* GET Registro page. */
router.get('/registro', function(req, res, next) {
  res.render('registro');
});

/* GET Login page. */
router.get('/login', function(req, res, next) {
  res.render('login');
});



module.exports = router;
