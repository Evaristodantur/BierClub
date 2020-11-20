var express = require('express');
var router = express.Router();

//Controller
let usersController = require('../controllers/usersController');

//Middlewares 
let userMiddleware = require("../middlewares/userMiddleware");                  //Middleware de Register
let loginMiddleware = require("../middlewares/loginMiddleware");                //Middleware de Login
let modificarUserMiddleware = require("../middlewares/modificarUserMiddleware");//Middleware de modificar usuario
let authMiddleware = require('../middlewares/authMiddleware');                  //Middleware de usuario logueado
let guestMiddleware = require('../middlewares/guestMiddleware');                //Middleware de invitado, sin usuario
let logUsersMiddleware = require('../middlewares/logUsersMiddleware');          //Middleware de usuarios registrados (LOG)
let authAdminMiddleware = require("../middlewares/authAdminMiddleware")         //Middleware de administradores

/********************************ADMINISTRADOR****************************************/

/* GET     /users/usersAdmin     page. */
router.get('/usersAdmin',/* authAdminMiddleware */ usersController.usersAdminList);

/* GET     /users/usersAdmin     page. */
router.get('/usersAdmin/:id', usersController.usersAdminEditView);

/* GET     /users/usersAdmin     page. */
router.post('/usersAdmin/:id', usersController.usersAdminEdit);

/********************************REGISTER*********************************************/

/* GET     /users/register      page. */
router.get('/register', authMiddleware, usersController.create);

/* GET     /users/register      page. */
router.post('/register', 
                userMiddleware,
                logUsersMiddleware, 
                                usersController.store);

/*********************************LOGIN***********************************************/

/* GET     /users/login      page. */
router.get('/login', 
                authMiddleware, 
                                usersController.loginRender);

/* GET     /users/login      page. */
router.post('/login', 
                loginMiddleware,  
                                usersController.loginIniciar);

/**********************************PERFIL*********************************************/

/* GET     /users/perfil/:id      page. */
router.get('/perfil/:id', 
                guestMiddleware, 
                                usersController.perfilEdit);

/* GET     /users/perfil/:id      page. */
router.post('/perfil/:id', 
                modificarUserMiddleware, 
                                usersController.perfilUpdate);

/**********************************ELIMINAR*******************************************/

/* GET     /users/perfil/:id      page. */
router.get('/perfil/eliminar/:id', 
                guestMiddleware, 
                                usersController.eliminar);

/* GET     /users/perfil/pedidos/:id      page. */
router.get('/perfil/pedidos/:id', usersController.pedidos);

/*************************************************************************************/



module.exports = router;
