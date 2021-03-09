// Routa de página de productos "bierclub.com/products/"

let express = require("express");
let router = express.Router();

//Controller
let productsController = require("../controllers/productsController");


/* ==========================================================================
   MIDDLEWARES
   ========================================================================== */
let multerUpload = require("../middlewares/multerMiddleware"); //Multer Middleware
let productMiddleware = require("../middlewares/productosMiddleware"); //Product Middleware
let logProductsMiddleware = require("../middlewares/logProductsMiddleware"); //Log de product Middleware
let guestMiddleware = require("../middlewares/guestMiddleware"); //Middleware de invitado, sin usuario
let authAdminMiddleware = require("../middlewares/authAdminMiddleware"); //Admin Middleware
let verifyAccountMiddleware = require("../middlewares/verifyAccountMiddleware"); //Middleware de verified


/* ==========================================================================
   ROUTES /products
   ========================================================================== */

/* GET     /products                                                     */
router.get("/", productsController.index);

/* GET     /products                                                     */
router.get("/productsFilter", productsController.productFilter);

/* GET     /products                                                     */
router.get("/categorie", productsController.productCategorieFilter);

/* GET     /products                                                     */
router.get("/search", productsController.productSearch);

/**********************************PRODUCT DETAIL*************************************/

/* GET     /products/productDetail/:id                                   */
router.get("/productDetail/:id", productsController.productDetail);

/**********************************ADMINISTRADOR**************************************/

/* GET     /productAdmin                                        */
router.get(
  "/productAdmin",
  guestMiddleware,
  verifyAccountMiddleware,
  authAdminMiddleware,
  productsController.productAdmin
);

/* GET     /productAdmin/productsFilter                                                     */
router.get("/productAdmin/productsFilter", productsController.productFilter);

/* GET     /productAdmin/search                                                     */
router.get("/productAdmin/search", productsController.productSearch);

/* GET     /productAdmin/categorie                                                     */
router.get(
  "/productAdmin/categorie",
  productsController.productCategorieFilter
);

/**********************************PRODUCT ADD****************************************/

/* GET     /productAdd - Pagina Visual de create                */
router.get(
  "/productAdd",
  guestMiddleware,
  verifyAccountMiddleware,
  authAdminMiddleware,
  productsController.createProduct
);

/* POST     /productAdd - Crea/almacena el producto              */
router.post(
  "/productAdd",
  multerUpload.any(),
  productMiddleware,
  logProductsMiddleware,
  productsController.storeProduct
);

/**********************************PRODUCT EDIT***************************************/

/* GET     /productEdit/:id - Pagina Visual de productEdit      */
router.get(
  "/productEdit/:id",
  guestMiddleware,
  verifyAccountMiddleware,
  authAdminMiddleware,
  productsController.editProduct
);

/* PUT     /productEdit/:id - Modifica el producto              */
router.put(
  "/productEdit/:id",
  multerUpload.any(),
  productMiddleware,
  logProductsMiddleware,
  productsController.updateProduct
);

/**********************************BORRAR*********************************************/

/* DELETE     /productEdit/borrar/:id - Borra el producto       */
router.delete(
  "/productEdit/delete/:id",
  guestMiddleware,
  authAdminMiddleware,
  productsController.deleteProduct
);

module.exports = router;
