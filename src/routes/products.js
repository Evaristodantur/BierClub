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
router.get('/productAdd', productsController.createProduct);

/* GET     /products/productAdd      page. */
router.post('/productAdd', productsController.storeProduct);

/* GET     /products/productEdit      page. */
router.get('/productEdit/:id', productsController.editProduct);

/* GET     /products/productEdit      page. */
router.post('/productEdit/:id', productsController.updateProduct);

/* GET     /products/productAdming      page. */
router.get('/productAdmin', productsController.productAdmin);



module.exports = router;