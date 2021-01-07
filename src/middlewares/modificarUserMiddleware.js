// Validación de campos al modificar usuarios en userAdmin

const { check, checkSchema, body } = require("express-validator");
const fs = require("fs");
const bcrypt = require('bcryptjs');
const path = require("path");
let db = require("../database/models");
let sequelize = db.sequelize;


let modificarUserMiddleware = [
    check("nombre").notEmpty().withMessage("El nombre no puede estar vacío")
        .isLength({min:2}).withMessage("El nombre debe tener al menos 2 caracteres"),
    check("email").notEmpty().withMessage("La dirección email no puede estar vacía")
        .isEmail().withMessage("La dirección email debe ser un válida"),
    check("antiguaContrasenia").notEmpty().withMessage("Este campo no puede estar vacío")
        .isLength({min:8}).withMessage("Este campo debe tener al menos 8 caracteres"),
    check("contrasenia").notEmpty().withMessage("La contraseña no puede estar vacía")
        .isLength({min:8}).withMessage("La contraseña debe tener al menos 8 caracteres"),
    check("confirmarContrasenia").notEmpty().withMessage("Este campo no puede estar vacío")
        .isLength({min:8}).withMessage("Este campo debe tener al menos 8 caracteres"),
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
        })
]

module.exports = modificarUserMiddleware;