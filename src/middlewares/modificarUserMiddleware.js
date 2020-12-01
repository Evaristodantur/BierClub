// Validación de campos al modificar usuarios en userAdmin

const { check, checkSchema } = require("express-validator");
const fs = require("fs");
const bcrypt = require('bcryptjs');
const path = require("path");

let dbDirectory = path.resolve(__dirname, '../database/usuarios.json')
let usuariosJson = JSON.parse(fs.readFileSync(dbDirectory), 'utf-8');

let modificarUserMiddleware = [
    check("nombre").notEmpty().withMessage("El nombre no puede estar vacío")
        .isLength({min:2}).withMessage("El nombre debe tener al menos 2 caracteres"),
    check("email").notEmpty().withMessage("La dirección email no puede estar vacía")
        .isEmail().withMessage("La dirección email debe ser un válida"),
    check("contrasenia").notEmpty().withMessage("La contraseña no puede estar vacía")
        .isLength({min:8}).withMessage("La contraseña debe tener al menos 8 caracteres"),
    check("confirmarContrasenia").notEmpty().withMessage("Este campo no puede estar vacío")
        .isLength({min:8}).withMessage("Este campo debe tener al menos 8 caracteres"),
        checkSchema({
            email: {
                custom: {
                        options: (value, { req }) => {
                            let idUrl = req.params.id;
                            let usuarioBuscado = usuariosJson.find( usuario => usuario.id == idUrl );

                            for(let i = 0 ; i < usuariosJson.length ; i++){
                                if(req.body.email == usuariosJson[i].email && req.body.email != usuarioBuscado.email){
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
            antiguaContrasenia: {
                custom: {
                    options: (value, { req }) => {
                        let idUrl = req.params.id;
                        let usuarioOriginal = usuariosJson.find( usuario => usuario.id == idUrl);
                        if(!bcrypt.compareSync(req.body.antiguaContrasenia,usuarioOriginal.contrasenia)){
                            return false;
                        }
                            return true;                                
                        }
                    },
                 errorMessage : 'La antigua contraseña no coincide'
            }
        })
]

module.exports = modificarUserMiddleware