var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET Productos page. */
router.get('/productDetail', function(req, res, next) {
  res.render('productDetail');
});

/* GET formulario de carga de producto page. */
router.get('/productAdd', function(req, res, next) {
  res.render('productAdd');
});

/* GET Carrito page. */
router.get('/productCart', function(req, res, next) {
  res.render('productCart');
});

/* GET Detalle del producto page. */
router.get('/productDetail', function(req, res, next) {
  res.render('productDetail');
});

/* GET Registro page. */
router.get('/register', function(req, res, next) {
  res.render('register');
});

/* GET Login page. */
router.get('/login', function(req, res, next) {
  res.render('login');
});
router.get('/nav', function(req, res, next) {
  res.render('nav');
});
router.get('/nav2', function(req, res, next) {
  res.render('nav2');
});

module.exports = router;
