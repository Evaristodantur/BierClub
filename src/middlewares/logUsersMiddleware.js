const fs = require('fs');
let { validationResult } = require('express-validator');

function logUsersMiddleware (req, res, next) {

    let errores = validationResult(req);
    if(!errores.isEmpty()){
        next();
        return fs.appendFileSync('./logs/logsUsers.txt',
`Hubo un intento de registro el ${(new Date().toLocaleString())}
El usuario a registrarse fue:
Nombre: ${req.body.nombre}
Email: ${req.body.email}
*************************************************************` + "\n");
    }
    fs.appendFileSync('./logs/logsUsers.txt',
`Se registró un usuario el ${(new Date().toLocaleString())}
El usuario registrado es:
Nombre: ${req.body.nombre}
Email: ${req.body.email}
*************************************************************` + "\n");
    next();
}

module.exports = logUsersMiddleware;