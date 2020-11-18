var express = require('express');
var router = express.Router();
const {check} = require("express-validator")

//Controller
let usersController = require('../controllers/usersController');



/********************************ADMINISTRADOR****************************************/

/* GET     /users/usersAdmin     page. */
router.get('/usersAdmin', usersController.usersAdmin);

/* GET     /users/usersAdmin     page. */
router.post('/usersAdmin', usersController.usersAdminCambios);

/********************************REGISTER*********************************************/

/* GET     /users/register      page. */
router.get('/register', usersController.create);

/* GET     /users/register      page. */
router.post('/register',[
    check("nombre").notEmpty().withMessage("no puede estar vacío")
        .isLength({min:2}).withMessage("debe tener al menos 2 caracteres"),
    check("email").notEmpty().withMessage("no puede estar vacío")
        .isEmail().withMessage("debe ser un email valido"),
    check("contrasenia").notEmpty().withMessage("no puede estar vacío")
        .isLength({min:8}).withMessage("debe tener al menos 8 caracteres"),
    check("confirmarContrasenia").notEmpty().withMessage("no puede estar vacío")
        .isLength({min:8}).withMessage("debe tener al menos 8 caracteres"),
/*     check("terminosCondiciones").notEmpty().withMessage("no puede estar vacío") */
], usersController.store);

/*********************************LOGIN***********************************************/

/* GET     /users/login      page. */
router.get('/login', usersController.loginRender);

/* GET     /users/login      page. */
router.post('/login', usersController.loginIniciar);

/**********************************PERFIL*********************************************/

/* GET     /users/perfil/:id      page. */
router.get('/perfil/:id', usersController.perfilEdit);

/* GET     /users/perfil/:id      page. */
router.post('/perfil/:id', usersController.perfilUpdate);

/**********************************ELIMINAR*******************************************/

/* GET     /users/perfil/:id      page. */
router.get('/perfil/eliminar/:id', usersController.eliminar);

/* GET     /users/perfil/pedidos/:id      page. */
router.get('/perfil/pedidos/:id', usersController.pedidos);

/*************************************************************************************/



module.exports = router;
