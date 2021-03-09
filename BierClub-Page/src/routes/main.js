// Routa de página general "bierclub.com/"

var express = require("express");
var router = express.Router();

//Controller
let mainController = require("../controllers/mainController");

/* ==========================================================================
   MIDDLEWARES
   ========================================================================== */
let contactMiddleware = require("../middlewares/contactMiddleware"); //Assets de contacto

/* ==========================================================================
   ROUTES /
   ========================================================================== */

/* GET    bierclub.com/          */
router.get("/", mainController.index);

/* GET    bierclub.com/          */
router.post("/", mainController.newsletterSuscription);

/**********************************ABOUT US***************************************/

/* GET    /about-us              */
router.get("/about-us", mainController.aboutUs);

/**********************************SUSCRIPCION************************************/

/* GET     /suscripcion          */
router.get("/suscripcion", mainController.suscripcion);

/* POST     /buySuscription          */
router.post("/buySuscription", mainController.buySuscription);

/**********************************CONTACTO*******************************************/

/* GET     /contacto            */
router.get("/contact", mainController.contactRender);

/* POST     /contacto           */
router.post("/contact", contactMiddleware, mainController.contactSend);
/**********************************GAME*******************************************/

/* GET     /game            */
router.get("/game", mainController.game);
/**********************************THANKS FOR BUYING******************************/

/* GET     /thanksForBuying            */
router.get("/thanksForBuying", mainController.thanksForBuying);

module.exports = router;
