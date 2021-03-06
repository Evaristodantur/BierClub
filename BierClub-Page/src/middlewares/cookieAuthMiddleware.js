// Verificación de usuario "recordarme", para mantenerse logueado
const db = require("../database/models");

let cookieAuthMiddleware = (req, res, next) => {
  if (
    req.cookies.recordame != undefined &&
    req.session.usuarioLogueado == undefined
  ) {
    db.Users.findOne({
      where: {
        email: req.cookies.recordame,
      },
    }).then((user) => {
      req.session.usuarioLogueado = user;
    });
  }

  next();
};

module.exports = cookieAuthMiddleware;
