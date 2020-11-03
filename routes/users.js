var express = require('express');
var router = express.Router();

//Controller
let usersController = require('../controllers/usersController');

/* GET Registro page. */
router.get('/register', usersController.register);

/* GET Login page. */
router.get('/login', usersController.login);

module.exports = router;
