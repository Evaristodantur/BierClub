const { check, checkSchema } = require("express-validator");
const fs = require("fs");
const bcrypt = require('bcryptjs');
const path = require("path");

let dbDirectory = path.resolve(__dirname, '../database/usuarios.json')
let usuariosJson = JSON.parse(fs.readFileSync(dbDirectory), 'utf-8');

let modificarUserMiddleware = [
    check("nombre").notEmpty().withMessage("Este campo no puede estar vacío")
        .isLength({min:2}).withMessage("Este campo debe tener al menos 2 caracteres"),
    check("email").notEmpty().withMessage("Este campo no puede estar vacío")
        .isEmail().withMessage("Este campo debe ser un email valido"),
    check("contrasenia").notEmpty().withMessage("Este campo no puede estar vacío")
        .isLength({min:8}).withMessage("Este campo debe tener al menos 8 caracteres"),
    check("confirmarContrasenia").notEmpty().withMessage("Este campo no puede estar vacío")
        .isLength({min:8}).withMessage("Este campo debe tener al menos 8 caracteres"),
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