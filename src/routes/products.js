let express = require('express');
let router = express.Router();

//Controller
let productsController = require('../controllers/productsController');

//Middleware
let multerUpload = require('../middlewares/multerMiddleware');  //Multer
let productMiddleware = require('../middlewares/productosMiddleware');
let logProductsMiddleware = require('../middlewares/logProductsMiddleware');
let guestMiddleware = require('../middlewares/guestMiddleware');                //Middleware de invitado, sin usuario
let authAdminMiddleware = require('../middlewares/authAdminMiddleware');




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
router.get('/productAdmin', 
                    guestMiddleware,
                    authAdminMiddleware, 
                                        productsController.productAdmin);

/**********************************PRODUCT ADD****************************************/

/* GET     /products/productAdd - Pagina Visual de create               page. */
router.get('/productAdd',  
                    guestMiddleware,
                    authAdminMiddleware, 
                                        productsController.createProduct);

/* POST     /products/productAdd - Crea/almacena el producto             page. */
router.post('/productAdd', 
                    multerUpload.any() ,
                    productMiddleware, 
                    logProductsMiddleware, 
                                        productsController.storeProduct);

/**********************************PRODUCT EDIT***************************************/

/* GET     /products/productEdit/:id - Pagina Visual de productEdit     page. */
router.get('/productEdit/:id',
                    guestMiddleware,
                    authAdminMiddleware, 
                                        productsController.editProduct);

/* PUT     /products/productEdit/:id - Modifica el producto             page. */
router.put('/productEdit/:id', 
                    multerUpload.any(), 
                    productMiddleware, 
                    logProductsMiddleware, 
                                        productsController.updateProduct);

/**********************************BORRAR*********************************************/

/* GET     /products/productEdit/borrar/:id - Borra el producto         page. */
router.delete('/productEdit/delete/:id',
                    guestMiddleware,
                    authAdminMiddleware, 
                                        productsController.deleteProduct);



module.exports = router;