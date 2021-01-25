// Routa de página de carrito "bierclub.com/carts/"

let express = require('express');
let router = express.Router();

//Controller
let cartsController = require('../controllers/cartsController');

//Middleware
let guestMiddleware = require('../middlewares/guestMiddleware'); //Middleware de invitado, sin usuario
let verifyAccountMiddleware = require('../middlewares/verifyAccountMiddleware'); //Middleware de verified

// Routes
router.get('/', cartsController.index);
router.get('/addProduct', cartsController.addProductView);
/**********************************PRODUCT CART***************************************/

/* GET     /products/productCart                                        page. */
router.get(
  '/productCart',
  /* guestMiddleware,
  verifyAccountMiddleware, */
  cartsController.productCart
);

router.post('/addProduct/:id', cartsController.addProduct);

router.get('/items', cartsController.itemsView);

module.exports = router;
