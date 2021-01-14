// Routa de página de carrito "bierclub.com/carts/"

let express = require('express');
let router = express.Router();

//Controller
let cartsController = require('../controllers/cartsController');

// Routes
router.get('/', cartsController.index);
router.get('/addProduct', cartsController.addProductView);
router.post('/addProduct/:id', cartsController.addProduct);

router.get('/items', cartsController.itemsView);




module.exports = router;