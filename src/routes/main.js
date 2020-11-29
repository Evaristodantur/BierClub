// Routa de página general "bierclub.com/"

var express = require('express');
var router = express.Router();

//Controller
let mainController = require('../controllers/mainController');

//Middlewares
let contactMiddleware = require("../middlewares/contactMiddleware");            //Assets de contacto


/**********************************HOME*******************************************/
/* GET    bierclub.com/         page. */
router.get('/', mainController.index);

/**********************************ABOUT US***************************************/

/* GET    /about-us             page. */
router.get('/about-us', mainController.aboutUs);

/**********************************PROMOCIONES************************************/

/* GET    /promociones          page. */
router.get('/promociones', mainController.promociones);

/**********************************SUSCRIPCION************************************/

/* GET     /suscripcion         page. */
router.get('/suscripcion', mainController.suscripcion);

/**********************************ENVIOS******************************************/

/* GET     /envios              page.*/
router.get("/envios", mainController.envios);

/**********************************CONTACTO*******************************************/

/* GET     /contacto            page.*/
router.get('/contacto', mainController.contactoRender);

/* POST     /contacto           page.*/
router.post('/contacto',
                contactMiddleware,
                        mainController.contactoSend);

module.exports = router;
