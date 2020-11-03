var express = require('express');
var router = express.Router();

//Controller
let mainController = require('../controllers/mainController');

/* GET home page. */
router.get('/', mainController.index);

/* GET About us page. */
router.get('/about-us', mainController.aboutUs);


module.exports = router;
