// Routa de página de usuarios "bierclub.com/users/"

var express = require("express");
var router = express.Router();

//Controller
let usersController = require("../controllers/usersController");


/* ==========================================================================
   MIDDLEWARES
   ========================================================================== */
let userMiddleware = require("../middlewares/userMiddleware"); //Middleware de Register
let loginMiddleware = require("../middlewares/loginMiddleware"); //Middleware de Login
let modificarUserMiddleware = require("../middlewares/modificarUserMiddleware"); //Middleware de modificar usuario
let authMiddleware = require("../middlewares/authMiddleware"); //Middleware de usuario logueado
let guestMiddleware = require("../middlewares/guestMiddleware"); //Middleware de invitado, sin usuario
let logUsersMiddleware = require("../middlewares/logUsersMiddleware"); //Middleware de usuarios registrados (LOG)
let authAdminMiddleware = require("../middlewares/authAdminMiddleware"); //Middleware de administradores
let perfilOrAdminMiddleware = require("../middlewares/perfilOrAdminMiddleware"); //Middleware de administradores o perfil logueado
let verifyAccountMiddleware = require("../middlewares/verifyAccountMiddleware"); //Middleware de verified

/* ==========================================================================
   ROUTES /users
   ========================================================================== */

/* GET     /usersAdmin             */
router.get(
  "/usersAdmin",
  guestMiddleware,
  verifyAccountMiddleware,
  authAdminMiddleware,
  usersController.usersAdminList
);

/* GET     /usersAdmin              */
router.get(
  "/usersAdmin/:id",
  guestMiddleware,
  verifyAccountMiddleware,
  authAdminMiddleware,
  usersController.usersAdminEditView
);

/* POST     /usersAdmin             */
router.post("/usersAdmin/:id", usersController.usersAdminEdit);

/********************************REGISTER*********************************************/

/* GET     /register                */
router.get("/register", authMiddleware, usersController.create);

/* POST     /register               */
router.post(
  "/register",
  userMiddleware,
  logUsersMiddleware,
  usersController.store
);

/**********************************EMAIL VERIFY***************************************/

/* GET     /verifyAccount           */
router.get("/verifyAccount/:id", usersController.verifyAccount);

/* POST     /verifyAccount           */
router.post("/verifyAccount/:id", usersController.reenviarEmail);

/*********************************LOGIN***********************************************/

/* GET     /login                   */
router.get("/login", authMiddleware, usersController.loginRender);

/* POST     /login                  */
router.post("/login", loginMiddleware, usersController.loginIniciar);

/* POST     /login                  */
router.post("/login/contraseniaOlvidada", usersController.contraseniaOlvidada);

/**********************************PERFIL*********************************************/

/* GET     /perfil/:id              */
router.get(
  "/perfil/:id",
  guestMiddleware,
  verifyAccountMiddleware,
  perfilOrAdminMiddleware,
  usersController.perfilEdit
);

/* GET     /logout              */
router.get(
  "/logout",
  guestMiddleware,
  verifyAccountMiddleware,
  usersController.userLogOut
);

/* POST     /perfil/:id             */
router.post(
  "/perfil/:id",
  modificarUserMiddleware,
  verifyAccountMiddleware,
  perfilOrAdminMiddleware,
  usersController.perfilUpdate
);

/**********************************ELIMINAR*******************************************/

/* GET     /perfil/pedidos/:id      */
router.get("/perfil/pedidos/:id", usersController.pedidos);

/* GET     /perfil/pedidos/:id      */
router.get("/perfil/pedidos/:id", usersController.pedidos);

/* DELETE     /perfil/:id           */
router.delete(
  "/eliminarUser/:id",
  guestMiddleware,
  perfilOrAdminMiddleware,
  usersController.eliminarUser
);

/* DELETE     /perfil/:id           */
router.delete(
  "/perfil/eliminarPerfil/:id",
  guestMiddleware,
  perfilOrAdminMiddleware,
  usersController.eliminarPerfil
);

module.exports = router;
