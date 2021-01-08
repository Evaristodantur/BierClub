// Routa de página de carrito "bierclub.com/carts/"

let express = require('express');
let router = express.Router();

//Controller
let cartsController = require('../controllers/cartsController');

// Routes
router.get('/', cartsController.index);
router.post('/', cartsController.selector);





module.exports = router;