// Validación de campos en la creación de usuarios

const {check, checkSchema, body} = require("express-validator");
const fs = require('fs');
const path = require('path');
let usuariosJson = fs.readFileSync(path.resolve(__dirname, '../database/usuarios.json'), 'utf-8');
let dbDirectory = path.resolve(__dirname, '../database/usuarios.json')
let db = require("../database/models");
let sequelize = db.sequelize;


let userMiddleware = [
    check("nombre").notEmpty().withMessage("El nombre no puede estar vacío")
        .isLength({min:2}).withMessage("El nombre debe tener al menos 2 caracteres"),
    check("email").notEmpty().withMessage("El email no puede estar vacío")
        .isEmail().withMessage("El email debe ser un email válido"),
    check("contrasenia").notEmpty().withMessage("La contraseña no puede estar vacío")
        .isLength({min:8}).withMessage("La contraseña debe tener al menos 8 caracteres"),
    check("confirmarContrasenia").notEmpty().withMessage("Este campo no puede estar vacío")
        .isLength({min:8}).withMessage("Este campo debe tener al menos 8 caracteres"),
        body('email').custom(value => {
            return db.Users.findOne({
                where: {
                    email: value
                }
            }).then(user => {
                if (user) {
                  return Promise.reject('Esta dirección email ya esta registrada');
                }
              }).catch(error => {
                console.log(error);
                });;
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