let express = require('express');
let router = express.Router();

//Controller
let productsController = require('../controllers/productsController');



/* GET     /products      page. */
router.get('/', productsController.index);

/* GET     /products/productDetail/:id      page. */
router.get('/productDetail/:id', productsController.productDetail);

/* GET     /products/productCart      page. */
router.get('/productCart', productsController.productCart);
  
/* GET     /products/productAdd      page. */
router.get('/productAdd', productsController.productAdd);

/* GET     /products/productEdit      page. */
router.get('/productEdit', productsController.productEdit);

/* GET     /products/productAdming      page. */
router.get('/productAdmin', productsController.productAdmin);



module.exports = router;