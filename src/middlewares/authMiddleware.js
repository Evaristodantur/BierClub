// Verificacion de si el usuario esta logueado

let authMiddleware = (req, res, next) => {
    if (req.session.usuarioLogueado == undefined) {
        next();
    } else {
        res.redirect('/users/perfil/' + req.session.usuarioLogueado.id);
    }
}

module.exports = authMiddleware;