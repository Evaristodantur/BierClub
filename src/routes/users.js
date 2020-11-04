var express = require('express');
var router = express.Router();

//Controller
let usersController = require('../controllers/usersController');



/* GET     /users/register      page. */
router.get('/register', usersController.register);

/* GET     /users/login      page. */
router.get('/login', usersController.login);

/* GET     /users/perfil/:id      page. */
router.get('/perfil/:id', usersController.perfil);



module.exports = router;
