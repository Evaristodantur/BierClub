let express = require('express');
let router = express.Router();

//Controller
let productsController = require('../controllers/productsController');

/* GET Productos page. */
router.get('/', productsController.index);

/* GET Productos page. */
router.get('/productDetail', productsController.productDetail);
  
/* GET formulario de carga de producto page. */
router.get('/productAdd', productsController.productAdd);
  
/* GET Carrito page. */
router.get('/productCart', productsController.productCart);


/* Exportar variable de rutas*/
module.exports = router;