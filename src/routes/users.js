var express = require('express');
var router = express.Router();

//Controller
let usersController = require('../controllers/usersController');



/* GET     /users/usersAdmin     page. */
router.get('/usersAdmin', usersController.usersAdmin);

/* GET     /users/usersAdmin     page. */
router.post('/usersAdmin', usersController.usersAdminCambios);

/* GET     /users/register      page. */
router.get('/register', usersController.create);

/* GET     /users/register      page. */
router.post('/register', usersController.store);

/* GET     /users/login      page. */
router.get('/login', usersController.loginRender);

/* GET     /users/login      page. */
router.post('/login', usersController.loginIniciar);

/* GET     /users/perfil/:id      page. */
router.get('/perfil/:id', usersController.perfilEdit);

/* GET     /users/perfil/:id      page. */
router.post('/perfil/:id', usersController.perfilUpdate);

/* GET     /users/perfil/:id      page. */
router.get('/perfil/eliminar/:id', usersController.eliminar);

/* GET     /users/perfil/pedidos/:id      page. */
router.get('/perfil/pedidos/:id', usersController.pedidos);



module.exports = router;
