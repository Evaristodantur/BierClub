// Verificación de si es el usuario es ADMIN

let authAdminMiddleware = (req, res, next) => {
  if (req.session.usuarioLogueado.admin == 1) {
    next();
  } else {
    res.render("sinPermisos", { userLogged: req.session.usuarioLogueado });
  }
};

module.exports = authAdminMiddleware;
