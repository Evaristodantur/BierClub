// Routa de página general "bierclub.com/"

var express = require('express');
var router = express.Router();

//Controller
let mainController = require('../controllers/mainController');

//Middlewares
let contactMiddleware = require('../middlewares/contactMiddleware'); //Assets de contacto

// Routes

/**********************************HOME*******************************************/
/* GET    bierclub.com/         page. */
router.get('/', mainController.index);

/* GET    bierclub.com/         page. */
router.post('/', mainController.newsletterSuscription);

/**********************************ABOUT US***************************************/

/* GET    /about-us             page. */
router.get('/about-us', mainController.aboutUs);

/**********************************SUSCRIPCION************************************/

/* GET     /suscripcion         page. */
router.get('/suscripcion', mainController.suscripcion);


/**********************************CONTACTO*******************************************/

/* GET     /contacto            page.*/
router.get('/contact', mainController.contactRender);

/* POST     /contacto           page.*/
router.post('/contact', contactMiddleware, mainController.contactSend);
/**********************************GAME*******************************************/

/* GET     /game            page.*/
router.get('/game', mainController.game);
/**********************************THANKS FOR BUYING******************************/

/* GET     /thanksForBuying            page.*/
router.get('/thanksForBuying', mainController.thanksForBuying);


module.exports = router;
