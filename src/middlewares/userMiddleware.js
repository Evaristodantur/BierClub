const {check} = require("express-validator");

let userMiddleware = [
    check("nombre").notEmpty().withMessage("no puede estar vacío")
        .isLength({min:2}).withMessage("debe tener al menos 2 caracteres"),
    check("email").notEmpty().withMessage("no puede estar vacío")
        .isEmail().withMessage("debe ser un email valido"),
    check("contrasenia").notEmpty().withMessage("no puede estar vacío")
        .isLength({min:8}).withMessage("debe tener al menos 8 caracteres"),
    check("confirmarContrasenia").notEmpty().withMessage("no puede estar vacío")
        .isLength({min:8}).withMessage("debe tener al menos 8 caracteres")
]

module.exports = userMiddleware