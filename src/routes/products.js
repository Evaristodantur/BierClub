let express = require('express');
let router = express.Router();
let multer = require('multer');
let path = require('path');

//Controller
let productsController = require('../controllers/productsController');

//Almacenamiento de las imagenes
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './src/public/images/productos')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  });
   
  var upload = multer({ storage: storage });


/* GET     /products      page. */
router.get('/', productsController.index);

/* GET     /products/productDetail/:id      page. */
router.get('/productDetail/:id', productsController.productDetail);

/* GET     /products/productCart      page. */
router.get('/productCart', productsController.productCart);



/* GET     /products/productAdmin                                       page. */
router.get('/productAdmin', productsController.productAdmin);

/* GET     /products/productAdd - Pagina Visual de create               page. */
router.get('/productAdd', productsController.createProduct);

/* GET     /products/productAdd - Crea/almacena el producto             page. */
router.post('/productAdd', upload.any(), productsController.storeProduct);

/* GET     /products/productEdit/:id - Pagina Visual de productEdit     page. */
router.get('/productEdit/:id', productsController.editProduct);

/* GET     /products/productEdit/:id - Modifica el producto             page. */
router.put('/productEdit/:id', productsController.updateProduct);

/* GET     /products/productEdit/borrar/:id - Borra el producto         page. */
router.get('/productEdit/borrar/:id', productsController.deleteProduct);



module.exports = router;