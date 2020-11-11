var express = require('express');
var router = express.Router();

//Controller
let usersController = require('../controllers/usersController');



/* GET     /users     page. */
router.get('/', usersController.index);

/* GET     /users/register      page. */
router.get('/register', usersController.create);

/* GET     /users/register      page. */
router.post('/register', usersController.store);

/* GET     /users/login      page. */
router.get('/login', usersController.login);

/* GET     /users/perfil/:id      page. */
router.get('/perfil/:id', usersController.perfilEdit);

/* GET     /users/perfil/:id      page. */
router.post('/perfil/:id', usersController.perfilUpdate);

/* GET     /users/perfil/:id      page. */
router.get('/perfil/eliminar/:id', usersController.eliminar);

/* GET     /users/perfil/pedidos/:id      page. */
router.get('/perfil/pedidos/:id', usersController.pedidos);



module.exports = router;
