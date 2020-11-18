const {check, checkSchema} = require("express-validator");

let userMiddleware = [
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
        terminosCondiciones: {
            custom: {
                    options: (value, { req }) => {
                        if(!req.body.terminosCondiciones){
                            return false;
                          }
                          return true;                                
                    }
            },
            errorMessage : 'Por favor acepta los terminos y condiciones'
    }
    })
]

module.exports = userMiddleware