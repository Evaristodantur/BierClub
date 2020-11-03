let express = require('express');
let router = express.Router();

//Controladores
let productsController = require('../controllers/productsController');

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

module.exports = router;