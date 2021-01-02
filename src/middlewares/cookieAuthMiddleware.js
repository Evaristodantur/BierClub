// Verificación de usuario "recordarme", para mantenerse logueado

const fs = require("fs");
const path = require("path");
const db = require("../database/models");

let usuariosJson = fs.readFileSync(path.resolve(__dirname, '../database/usuarios.json'), 'utf-8');

let cookieAuthMiddleware = (req, res, next) => {

    if (req.cookies.recordame != undefined && 
        req.session.usuarioLogueado == undefined) {

            db.Users.findOne({
                where: {
                    email: req.cookies.recordame
                }
            }).then(user => {
                req.session.usuarioLogueado = user
            })
            /* let usuarioALoguearse = usuariosJson.find(usuario => usuario.email == req.cookies.recordame);

            req.session.usuarioLogueado = usuarioALoguearse; */
    }
    next();
}

module.exports = cookieAuthMiddleware;