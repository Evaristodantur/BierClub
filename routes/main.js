var express = require('express');
var router = express.Router();

//Controller
let mainController = require('../controllers/mainController');

/* GET home page. */
router.get('/', mainController.index);

/* GET About us page. */
router.get('/about-us', mainController.aboutUs);

/* GET Carrito page. */
router.get('/promociones', mainController.promociones);

/* GET Carrito page. */
router.get('/suscripcion', mainController.suscripcion);

/* GET ERROR page. */
router.get('/error', mainController.error);

module.exports = router;
