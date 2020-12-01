// Validaciones de logueo

const { check, checkSchema } = require("express-validator");
const fs = require("fs");
const bcrypt = require('bcryptjs');
const path = require("path");

let dbDirectory = path.resolve(__dirname, '../database/usuarios.json')
let usuariosJson = JSON.parse(fs.readFileSync(dbDirectory), 'utf-8');

let loginMiddleware = [
    check("email").notEmpty().withMessage("La dirección email no puede estar vacío")
        .isEmail().withMessage("La dirección email debe ser un email válido"),
    check("contrasenia").notEmpty().withMessage("La contraseña no puede estar vacía")
        .isLength({min:8}).withMessage("La contraseña debe tener al menos 8 caracteres"),
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
            errorMessage : 'Dirección email y/o contraseña incorrectos'
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
            errorMessage : 'Dirección email y/o contraseña incorrectos'
    }
    })
]

module.exports = loginMiddleware