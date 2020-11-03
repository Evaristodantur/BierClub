var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET Productos page. */
router.get('/productDetail', function(req, res, next) {
  res.render('products/productDetail');
});

/* GET formulario de carga de producto page. */
router.get('/productAdd', function(req, res, next) {
  res.render('products/productAdd');
});

/* GET Carrito page. */
router.get('/productCart', function(req, res, next) {
  res.render('products/productCart');
});

/* GET Registro page. */
router.get('/register', function(req, res, next) {
  res.render('users/register');
});

/* GET Login page. */
router.get('/login', function(req, res, next) {
  res.render('users/login');
});

/* GET About us page. */
router.get('/about-us', function(req, res, next) {
  res.render('aboutUs');
});


module.exports = router;
