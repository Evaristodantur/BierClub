let authAdminMiddleware = (req, res, next) => {
    if (req.session.usuarioLogueado.admin == true) {
        next();
    } else {
        res.render("sinPermisos");
    }
}

module.exports = authAdminMiddleware;