var express = require('express');
var router = express.Router();

//Controladores
let mainController = require('../controllers/mainController');

/* GET home page. */
router.get('/', mainController.index);

/* GET Registro page. */
router.get('/register', function(req, res, next) {
  res.render('users/register');
});

/* GET Login page. */
router.get('/login', function(req, res, next) {
  res.render('users/login');
});

/* GET About us page. */
router.get('/about-us', function(req, res, next) {
  res.render('aboutUs');
});


module.exports = router;
