const { check, checkSchema } = require("express-validator");
const fs = require("fs");
const bcrypt = require('bcryptjs');
const path = require("path");

let dbDirectory = path.resolve(__dirname, '../database/usuarios.json')
let usuariosJson = JSON.parse(fs.readFileSync(dbDirectory), 'utf-8');

let loginMiddleware = [
    check("email").notEmpty().withMessage("Este campo no puede estar vacío")
        .isEmail().withMessage("Este campo debe ser un email válido"),
    check("contrasenia").notEmpty().withMessage("Este campo no puede estar vacío")
        .isLength({min:8}).withMessage("Este campo debe tener al menos 8 caracteres"),
    checkSchema({
        email: {
            custom: {
                    options: (value, { req }) => {
                        let email = req.body.email;

                        let buscarUsuario = usuariosJson.find(usuario => usuario.email == email)

                        if(buscarUsuario == undefined){
                            return false 
                        }
                        return true
                    }
            },
            errorMessage : 'El email no existe'
    }
    }),
    checkSchema({
        contrasenia: {
            custom: {
                    options: (value, { req }) => {
                        let email = req.body.email;

                        let buscarUsuario = usuariosJson.find(usuario => usuario.email == email)

                        if(req.body.email == buscarUsuario.email && bcrypt.compareSync(req.body.contrasenia,buscarUsuario.contrasenia)){
                            return true
                        }
                        return false
                    }
            },
            errorMessage : 'La contraseña es incorrecta'
    }
    })
]

module.exports = loginMiddleware