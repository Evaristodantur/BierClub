const {check, checkSchema} = require("express-validator");
const fs = require('fs');
const path = require('path');
let usuariosJson = fs.readFileSync(path.resolve(__dirname, '../database/usuarios.json'), 'utf-8');
let dbDirectory = path.resolve(__dirname, '../database/usuarios.json')

usuariosJson == "" ?
    fs.writeFileSync(dbDirectory, JSON.stringify(usuariosJson = [])) :
    usuariosJson = JSON.parse(fs.readFileSync(dbDirectory), 'utf-8');

let userMiddleware = [
    check("nombre").notEmpty().withMessage("El nombre no puede estar vacío")
        .isLength({min:2}).withMessage("El nombre debe tener al menos 2 caracteres"),
    check("email").notEmpty().withMessage("El email no puede estar vacío")
        .isEmail().withMessage("El email debe ser un email válido"),
    check("contrasenia").notEmpty().withMessage("La contraseña no puede estar vacío")
        .isLength({min:8}).withMessage("La contraseña debe tener al menos 8 caracteres"),
    check("confirmarContrasenia").notEmpty().withMessage("Este campo no puede estar vacío")
        .isLength({min:8}).withMessage("Este campo debe tener al menos 8 caracteres"),
        checkSchema({
            email: {
                custom: {
                        options: (value, { req }) => {
                            for(let i = 0 ; i < usuariosJson.length ; i++){
                                if(req.body.email == usuariosJson[i].email){
                                    return false;
                                }
                                }
                                return true;                                
                        }
                    },
                errorMessage : 'Esta dirección email ya esta registrada'
            }
        }),
        checkSchema({
            contrasenia: {
                custom: {
                    options: (value, { req }) => {
                        if(req.body.contrasenia === req.body.email){
                            return false;
                        }
                        return true;                                
                    }
                },
            errorMessage : 'La contraseña no puede ser igual al email'
            }
        }),
        checkSchema({
            confirmarContrasenia: {
                    custom: {
                            options: (value, { req }) => {
                                if(req.body.contrasenia == req.body.confirmarContrasenia){
                                    return true;
                                    }
                                    return false;                                
                            }
                    },
                errorMessage : 'Las contraseñas no coinciden'
            }
        }),
        checkSchema({
            terminosCondiciones: {
                custom: {
                        options: (value, { req }) => {
                            if(!req.body.terminosCondiciones){
                                return false;
                            }
                            return true;                                
                        }
                    },
                errorMessage : 'Por favor acepta los términos y condiciones'
            }
        })
]

module.exports = userMiddleware