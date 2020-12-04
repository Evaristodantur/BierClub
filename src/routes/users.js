// Routa de página de usuarios "bierclub.com/users/"

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
let authAdminMiddleware = require("../middlewares/authAdminMiddleware");        //Middleware de administradores
let perfilOrAdminMiddleware = require("../middlewares/perfilOrAdminMiddleware");//Middleware de administradores o perfil logueado
let verifyAccountMiddleware = require("../middlewares/verifyAccountMiddleware");//Middleware de verified



//Routes

/********************************ADMINISTRADOR****************************************/

/* GET     /users/usersAdmin            page. */
router.get('/usersAdmin',
                guestMiddleware,
                verifyAccountMiddleware,
                authAdminMiddleware,
                                 usersController.usersAdminList);

/* GET     /users/usersAdmin             page. */
router.get('/usersAdmin/:id',
                guestMiddleware,
                verifyAccountMiddleware,
                authAdminMiddleware,
                                 usersController.usersAdminEditView);

/* POST     /users/usersAdmin            page. */
router.post('/usersAdmin/:id', usersController.usersAdminEdit);

/********************************REGISTER*********************************************/

/* GET     /users/register               page. */
router.get('/register',
                authMiddleware,
                                usersController.create);

/* POST     /users/register              page. */
router.post('/register', 
                userMiddleware,
                logUsersMiddleware, 
                                usersController.store);

/**********************************EMAIL VERIFY***************************************/

/* GET     /users/verifyAccount          page. */
router.get('/verifyAccount/:id', usersController.verifyAccount);

router.post("/verifyAccount/:id", usersController.reenviarEmail);

/*********************************LOGIN***********************************************/

/* GET     /users/login                  page. */
router.get('/login', 
                authMiddleware, 
                                usersController.loginRender);

/* POST     /users/login                 page. */
router.post('/login', 
                loginMiddleware,  
                                usersController.loginIniciar);

/**********************************PERFIL*********************************************/

/* GET     /users/perfil/:id             page. */
router.get('/perfil/:id', 
                guestMiddleware, 
                verifyAccountMiddleware,
                perfilOrAdminMiddleware,
                                usersController.perfilEdit);

/* POST     /users/perfil/:id            page. */
router.post('/perfil/:id', 
                modificarUserMiddleware, 
                verifyAccountMiddleware,
                perfilOrAdminMiddleware,
                                usersController.perfilUpdate);

/**********************************ELIMINAR*******************************************/

/* GET     /users/perfil/pedidos/:id     page. */
router.get('/perfil/pedidos/:id', usersController.pedidos);

/* DELETE     /users/perfil/:id          page. */
router.delete('/perfil/eliminar/:id', 
                guestMiddleware, 
                perfilOrAdminMiddleware,
                                usersController.eliminar);



module.exports = router;
