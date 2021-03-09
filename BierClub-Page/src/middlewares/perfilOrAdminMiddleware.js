// Verificación de si el usuario es Admin y esta logueado

let perfilOrAdminMiddleware = (req, res, next) => {
  if (
    req.session.usuarioLogueado.id == req.params.id ||
    req.session.usuarioLogueado.admin == 1
  ) {
    next();
  } else {
    res.render("sinPermisos", { userLogged: req.session.usuarioLogueado });
  }
};

module.exports = perfilOrAdminMiddleware;
