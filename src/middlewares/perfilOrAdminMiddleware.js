let perfilOrAdminMiddleware = (req, res, next) => {
    if (req.session.usuarioLogueado.id == req.params.id || req.session.usuarioLogueado.admin == true) {
        next();
    } else {
        res.send('NO PODES ENTRAR ACA MOGOLICO');
    }
}

module.exports = perfilOrAdminMiddleware;