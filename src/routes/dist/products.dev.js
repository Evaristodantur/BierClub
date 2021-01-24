"use strict";

// Routa de página de productos "bierclub.com/products/"
var express = require('express');

var router = express.Router(); //Controller

var productsController = require('../controllers/productsController'); //Middleware


var multerUpload = require('../middlewares/multerMiddleware'); //Multer Middleware


var productMiddleware = require('../middlewares/productosMiddleware'); //Product Middleware


var logProductsMiddleware = require('../middlewares/logProductsMiddleware'); //Log de product Middleware


var guestMiddleware = require('../middlewares/guestMiddleware'); //Middleware de invitado, sin usuario


var authAdminMiddleware = require('../middlewares/authAdminMiddleware'); //Admin Middleware


var verifyAccountMiddleware = require('../middlewares/verifyAccountMiddleware'); //Middleware de verified
// Routes

/**********************************PRODUCTOS******************************************/

/* GET     /products                                                    page. */


router.get('/', productsController.index);
/* GET     /products                                                    page. */

router.get('/productsFilter', productsController.productFilter);
/* GET     /products                                                    page. */

router.get('/categorie', productsController.productCategorieFilter);
/* GET     /products                                                    page. */

router.get('/search', productsController.productSearch);
router.get('/prueba', productsController.prueba);
/**********************************PRODUCTOS LUPULADAS/NO LUPULADAS******************************************/

/**********************************PRODUCT DETAIL*************************************/

/* GET     /products/productDetail/:id                                  page. */

router.get('/productDetail/:id', productsController.productDetail);
/**********************************PRODUCT CART***************************************/

/* GET     /products/productCart                                        page. */

router.get('/productCart', productsController.productCart);
/**********************************ADMINISTRADOR**************************************/

/* GET     /products/productAdmin                                       page. */

router.get('/productAdmin',
/* guestMiddleware,
                  verifyAccountMiddleware,
                  authAdminMiddleware,  */
productsController.productAdmin);
/* GET     /products                                                    page. */

router.get('/productAdmin/productsFilter', productsController.productFilter);
/* GET     /products                                                    page. */

router.get('/productAdmin/search', productsController.productSearch);
/* GET     /products                                                    page. */

router.get('/productAdmin/categorie', productsController.productCategorieFilter);
/**********************************PRODUCT ADD****************************************/

/* GET     /products/productAdd - Pagina Visual de create               page. */

router.get('/productAdd', guestMiddleware, verifyAccountMiddleware, authAdminMiddleware, productsController.createProduct);
/* POST     /products/productAdd - Crea/almacena el producto             page. */

router.post('/productAdd', multerUpload.any(), productMiddleware, logProductsMiddleware, productsController.storeProduct);
/**********************************PRODUCT EDIT***************************************/

/* GET     /products/productEdit/:id - Pagina Visual de productEdit     page. */

router.get('/productEdit/:id', guestMiddleware, verifyAccountMiddleware, authAdminMiddleware, productsController.editProduct);
/* PUT     /products/productEdit/:id - Modifica el producto             page. */

router.put('/productEdit/:id', multerUpload.any(), productMiddleware, logProductsMiddleware, productsController.updateProduct);
/**********************************BORRAR*********************************************/

/* DELETE     /products/productEdit/borrar/:id - Borra el producto      page. */

router["delete"]('/productEdit/delete/:id', guestMiddleware, authAdminMiddleware, productsController.deleteProduct);
module.exports = router;