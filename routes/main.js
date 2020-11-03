var express = require('express');
var router = express.Router();

//Controladores
let mainController = require('../controllers/mainController');

/* GET home page. */
router.get('/', mainController.index);

/* GET About us page. */
router.get('/about-us', (req, res, next) => {
  res.render('aboutUs');
});


module.exports = router;
