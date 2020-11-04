let express = require('express');
let router = express.Router();

//Controller
let productsController = require('../controllers/productsController');

/* GET Productos page. */
router.get('/', productsController.index);

/* GET Productos page. */
router.get('/productDetail', productsController.productDetail);

/* GET Carrito page. */
router.get('/productCart', productsController.productCart);

  
/* GET formulario de carga de producto page. */
router.get('/productAdd', productsController.productAdd);

/* GET formulario de carga de producto page. */
router.get('/productEdit', productsController.productEdit);

/* GET formulario de carga de producto page. */
router.get('/productAdmin', productsController.productAdmin);


/* Exportar variable de rutas*/
module.exports = router;