"use strict";

// Routa de página general "bierclub.com/"
var express = require('express');

var router = express.Router(); //Controller

var mainController = require('../controllers/mainController'); //Middlewares


var contactMiddleware = require('../middlewares/contactMiddleware'); //Assets de contacto
// Routes

/**********************************HOME*******************************************/

/* GET    bierclub.com/         page. */


router.get('/', mainController.index);
/* GET    bierclub.com/         page. */

router.post('/', mainController.newsletterSuscription);
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

router.get('/envios', mainController.envios);
/**********************************CONTACTO*******************************************/

/* GET     /contacto            page.*/

router.get('/contact', mainController.contactRender);
/* POST     /contacto           page.*/

router.post('/contact', contactMiddleware, mainController.contactSend);
/**********************************GAME*******************************************/

/* GET     /game            page.*/

router.get('/game', mainController.game);
module.exports = router;