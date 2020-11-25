let perfilOrAdminMiddleware = (req, res, next) => {
    console.log(req.session.usuarioLogueado.id);
    console.log(req.params.id);
    console.log(req.session.usuarioLogueado.admin);
    if (req.session.usuarioLogueado.id == req.params.id || req.session.usuarioLogueado.admin == true) {
        next();
    } else {
        res.render('sinPermisos');
    }
}

module.exports = perfilOrAdminMiddleware;