"use strict";

// Routa de página de carrito "bierclub.com/carts/"
var express = require('express');

var router = express.Router(); //Controller

var cartsController = require('../controllers/cartsController'); // Routes


router.get('/', cartsController.index);
router.get('/addProduct', cartsController.addProductView);
router.post('/addProduct/:id', cartsController.addProduct);
router.get('/items', cartsController.itemsView);
module.exports = router;