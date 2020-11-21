var express = require('express');
var router = express.Router();

//Controller
let mainController = require('../controllers/mainController');



/* GET    bierclub.com/      page. */
router.get('/', mainController.index);
router.get('/sinPermisos', function(req,res,next){
    res.render("sinPermisos")
});

/* GET    /about-us       page. */
router.get('/about-us', mainController.aboutUs);

/* GET    /promociones          page. */
router.get('/promociones', mainController.promociones);

/* GET     /suscripcion      page. */
router.get('/suscripcion', mainController.suscripcion);

/* GET ENVIOS page.*/
router.get("/envios", mainController.envios);

module.exports = router;
