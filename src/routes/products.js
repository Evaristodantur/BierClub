let express = require('express');
let router = express.Router();

//Controller
let productsController = require('../controllers/productsController');

//Middleware
let upload = require('../middlewares/multer');  //Multer
const { check, validationResult, body } = require('express-validator'); //Express-validator



// Routes

/**********************************PRODUCTOS******************************************/

/* GET     /products      page. */
router.get('/', productsController.index);

/**********************************PRODUCT DETAIL*************************************/

/* GET     /products/productDetail/:id      page. */
router.get('/productDetail/:id', productsController.productDetail);

/**********************************PRODUCT CART***************************************/

/* GET     /products/productCart      page. */
router.get('/productCart', productsController.productCart);

/**********************************ADMINISTRADOR**************************************/

/* GET     /products/productAdmin                                       page. */
router.get('/productAdmin', productsController.productAdmin);

/**********************************PRODUCT ADD****************************************/

/* GET     /products/productAdd - Pagina Visual de create               page. */
router.get('/productAdd', productsController.createProduct);

/* POST     /products/productAdd - Crea/almacena el producto             page. */
router.post('/productAdd', upload.any(), productsController.storeProduct);

/**********************************PRODUCT EDIT***************************************/

/* GET     /products/productEdit/:id - Pagina Visual de productEdit     page. */
router.get('/productEdit/:id', productsController.editProduct);

/* PUT     /products/productEdit/:id - Modifica el producto             page. */
router.put('/productEdit/:id', upload.any(), productsController.updateProduct);

/**********************************BORRAR*********************************************/

/* GET     /products/productEdit/borrar/:id - Borra el producto         page. */
router.get('/productEdit/delete/:id', productsController.deleteProduct);



module.exports = router;