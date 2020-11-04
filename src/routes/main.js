var express = require('express');
var router = express.Router();

//Controller
let mainController = require('../controllers/mainController');



/* GET    bierclub.com/      page. */
router.get('/', mainController.index);

/* GET    /about-us       page. */
router.get('/about-us', mainController.aboutUs);

/* GET    /promociones          page. */
router.get('/promociones', mainController.promociones);

/* GET     /suscripcion      page. */
router.get('/suscripcion', mainController.suscripcion);

/* GET     /prueba      page. */
router.get('/prueba/:id', mainController.prueba);


/* GET ERROR page. */
router.get('/error', mainController.error);

module.exports = router;
