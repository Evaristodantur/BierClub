let authAdminMiddleware = (req, res, next) => {
    if (req.session.usuarioLogueado.admin == true) {
        next();
    } else {
        res.send("Necesitas ser admin para ver esta pagina");
    }
}

module.exports = authAdminMiddleware;