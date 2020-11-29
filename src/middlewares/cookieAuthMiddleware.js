// Verificación de usuario "recordarme", para mantenerse logueado

const fs = require("fs");
const path = require("path");

let usuariosJson = fs.readFileSync(path.resolve(__dirname, '../database/usuarios.json'), 'utf-8');

let cookieAuthMiddleware = (req, res, next) => {
    if (req.cookies.recordame != undefined && 
        req.session.usuarioLogueado == undefined) {

            let usuarioALoguearse = usuariosJson.find(usuario => usuario.email == req.cookies.recordame);

            req.session.usuarioLogueado = usuarioALoguearse;
    }
    next();
}

module.exports = cookieAuthMiddleware;