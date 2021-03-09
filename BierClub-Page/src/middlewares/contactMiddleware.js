// Validaciones de campos en /contacto

const { check } = require("express-validator");

let contactMiddleware = [
  check("nombre")
    .notEmpty()
    .withMessage("El nombre no puede estar vacío")
    .isLength({ min: 2 })
    .withMessage("El nombre debe tener al menos 2 caracteres"),
  check("email")
    .notEmpty()
    .withMessage("El email no puede estar vacío")
    .isEmail()
    .withMessage("El email debe ser un email válido"),
  check("subject")
    .notEmpty()
    .withMessage("El asunto no puede estar vacío")
    .isLength({ min: 3 })
    .withMessage("El asunto debe tener al menos 3 caracteres"),
  check("message")
    .notEmpty()
    .withMessage("El mensaje no puede estar vacío")
    .isLength({ min: 10 })
    .withMessage("El mensaje debe tener al menos 10 caracteres"),
];

module.exports = contactMiddleware;
