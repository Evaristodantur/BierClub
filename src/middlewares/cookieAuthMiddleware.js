const fs = require("fs");
const path = require("path");

let dbDirectory = path.resolve(__dirname, '../database/usuarios.json')
let usuariosJson = JSON.parse(fs.readFileSync(dbDirectory), 'utf-8');

let cookieAuthMiddleware = (req, res, next) => {
    if (req.cookies.recordame != undefined && 
        req.session.usuarioLogueado == undefined) {
            let usuarioALoguearse;

            for(let i=0; i < usuariosJson.length; i++) {
                if (req.cookies.recordame == usuariosJson[i].email) {
                        usuarioALoguearse = usuariosJson[i];
                        break;
                }
            }
            req.session.usuarioLogueado = usuarioALoguearse;
    }
    next();
}

module.exports = cookieAuthMiddleware;