// Verificacion de emails no validados

let verifyAccountMiddleware = (req, res, next) => {
    if (req.session.usuarioLogueado.verify[0] == true) {
        next();
    } else {
        res.render('users/verifyAccount', { msgErrorVerify: 'Por favor verifica tu cuenta antes de entrar a esta pagina'} )
    }
}

module.exports = verifyAccountMiddleware;