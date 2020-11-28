let verifyAccountMiddleware = (req, res, next) => {
    if (req.session.usuarioLogueado.verify == true) {
        next();
    } else {
        res.render('users/verifyAccount', { msgErrorVerify: 'Por favor verifica tu cuenta antes de entrar a esta pagina'} )
    }
}

module.exports = verifyAccountMiddleware;