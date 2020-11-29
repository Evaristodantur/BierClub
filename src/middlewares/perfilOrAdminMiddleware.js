// Verificacion de si el usuario es Admin y esta logueado

let perfilOrAdminMiddleware = (req, res, next) => {
    if (req.session.usuarioLogueado.id == req.params.id || req.session.usuarioLogueado.admin == true) {
        next();
    } else {
        res.render('sinPermisos');
    }
}

module.exports = perfilOrAdminMiddleware;