"use strict";

// Routa de página de usuarios "bierclub.com/users/"
var express = require('express');

var router = express.Router(); //Controller

var usersController = require('../controllers/usersController'); //Middlewares


var userMiddleware = require('../middlewares/userMiddleware'); //Middleware de Register


var loginMiddleware = require('../middlewares/loginMiddleware'); //Middleware de Login


var modificarUserMiddleware = require('../middlewares/modificarUserMiddleware'); //Middleware de modificar usuario


var authMiddleware = require('../middlewares/authMiddleware'); //Middleware de usuario logueado


var guestMiddleware = require('../middlewares/guestMiddleware'); //Middleware de invitado, sin usuario


var logUsersMiddleware = require('../middlewares/logUsersMiddleware'); //Middleware de usuarios registrados (LOG)


var authAdminMiddleware = require('../middlewares/authAdminMiddleware'); //Middleware de administradores


var perfilOrAdminMiddleware = require('../middlewares/perfilOrAdminMiddleware'); //Middleware de administradores o perfil logueado


var verifyAccountMiddleware = require('../middlewares/verifyAccountMiddleware'); //Middleware de verified
//Routes

/********************************ADMINISTRADOR****************************************/

/* GET     /users/usersAdmin            page. */


router.get('/usersAdmin', guestMiddleware, verifyAccountMiddleware, authAdminMiddleware, usersController.usersAdminList);
/* GET     /users/usersAdmin             page. */

router.get('/usersAdmin/:id', guestMiddleware, verifyAccountMiddleware, authAdminMiddleware, usersController.usersAdminEditView);
/* POST     /users/usersAdmin            page. */

router.post('/usersAdmin/:id', usersController.usersAdminEdit);
/********************************REGISTER*********************************************/

/* GET     /users/register               page. */

router.get('/register', authMiddleware, usersController.create);
/* POST     /users/register              page. */

router.post('/register', userMiddleware, logUsersMiddleware, usersController.store);
/**********************************EMAIL VERIFY***************************************/

/* GET     /users/verifyAccount          page. */

router.get('/verifyAccount/:id', usersController.verifyAccount);
router.post('/verifyAccount/:id', usersController.reenviarEmail);
/*********************************LOGIN***********************************************/

/* GET     /users/login                  page. */

router.get('/login', authMiddleware, usersController.loginRender);
/* POST     /users/login                 page. */

router.post('/login', loginMiddleware, usersController.loginIniciar);
/**********************************PERFIL*********************************************/

/* GET     /users/perfil/:id             page. */

router.get('/perfil/:id', guestMiddleware, verifyAccountMiddleware, perfilOrAdminMiddleware, usersController.perfilEdit);
/* POST     /users/perfil/:id            page. */

router.post('/perfil/:id', modificarUserMiddleware, verifyAccountMiddleware, perfilOrAdminMiddleware, usersController.perfilUpdate);
/**********************************ELIMINAR*******************************************/

/* GET     /users/perfil/pedidos/:id     page. */

router.get('/perfil/pedidos/:id', usersController.pedidos);
/* DELETE     /users/perfil/:id          page. */

router["delete"]('/perfil/eliminar/:id', guestMiddleware, perfilOrAdminMiddleware, usersController.eliminar);
module.exports = router;