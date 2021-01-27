// Routa de página de carrito "bierclub.com/carts/"

let express = require('express');
let router = express.Router();

//Controller
let cartsController = require('../controllers/cartsController');

//Middleware
let guestMiddleware = require('../middlewares/guestMiddleware'); //Middleware de invitado, sin usuario
let verifyAccountMiddleware = require('../middlewares/verifyAccountMiddleware'); //Middleware de verified

// Routes
/**********************************PRODUCT CART***************************************/

/* GET     /products/productCart                                        page. */
router.get(
  '/productCart',
  guestMiddleware,
  verifyAccountMiddleware,
  cartsController.productCart
);

router.post('/addProduct/:id', cartsController.addProduct);

router.post('/deleteProduct/:id', cartsController.deleteProductFromCart);

router.post('/deleteAllProducts', cartsController.deleteAllProducts);

router.post('/procederAlPago', cartsController.procederAlPago);

router.get('/items', cartsController.itemsView);

module.exports = router;
