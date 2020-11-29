// Verificacion de emails no validados

let verifyAccountMiddleware = (req, res, next) => {
    let usuarioSinVerificar = req.session.usuarioLogueado;
    if (usuarioSinVerificar.verify[0] == true) {
        next();
    } else {
        usuarioSinVerificar.msgErrorVerify = "Por favor verifica tu cuenta antes de entrar a esta pagina";
        console.log(usuarioSinVerificar);
        res.render('users/verifyAccount', { usuarioSinVerificar : usuarioSinVerificar })
    }
}

module.exports = verifyAccountMiddleware;