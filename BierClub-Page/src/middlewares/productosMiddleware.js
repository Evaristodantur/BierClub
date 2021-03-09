// Verificación de campos en los productos

const { check, checkSchema } = require("express-validator"); //Express-validator

let productMiddleware = [
  check("nombre")
    .notEmpty()
    .withMessage("no puede estar vacío")
    .isLength({ min: 3, max: 61 })
    .withMessage("debe tener entre 3 y 60 caracteres"),
  check("precio")
    .notEmpty()
    .withMessage("no puede estar vacío")
    .isInt({ min: 0 })
    .withMessage("debe ser un número positivo"),
  check("descuento")
    .notEmpty()
    .withMessage("no puede estar vacío")
    .isInt({ min: 0, max: 100 })
    .withMessage("debe ser un número del 0 al 100"),
  check("stock")
    .notEmpty()
    .withMessage("no puede estar vacío")
    .isInt({ min: 0 })
    .withMessage("debe ser un número positivo"),
  check("descripcion")
    .isLength({ max: 280 })
    .withMessage("sólo acepta hasta 280 caracteres"),
  checkSchema({
    imagen: {
      custom: {
        options: (value, { req, errorMessage, files, paths }) => {
          if (req.imagenGuardada == undefined) {
            return true;
          }

          if (typeof req.files[0] == "undefined") {
            return false;
          }
          return true;
        },
      },
      errorMessage: "las imágenes deben ser .jpg, .png o .jpeg",
    },
  }),
  checkSchema({
    imagen: {
      custom: {
        options: (value, { req, errorMessage, files, paths }) => {
          if (typeof req.imagenGuardada != "undefined") {
            if (req.imagenGuardada.length > req.files.length) {
              return false;
            }
          }

          return true;
        },
      },
      errorMessage: "hay archivos que se intentaron subir que no son imagenes",
    },
  }),
  checkSchema({
    imagen: {
      custom: {
        options: (value, { req, errorMessage }) => {
          if (typeof req.files != "undefined" && req.files.length > 4) {
            return false;
          }

          return true;
        },
      },
      errorMessage: "debe ser 4 imágenes como máximo",
    },
  }),
  checkSchema({
    imagen: {
      custom: {
        options: (value, { req }) => {
          for (let i = 0; i < req.files.length; i++) {
            if (typeof req.files[i] != "undefined") {
              if (req.files[i].size > 4200000) {
                return false;
              }
            }
          }
          return true;
        },
      },
      errorMessage: "debe ser una imágen menor a 4mb",
    },
  }),
];

module.exports = productMiddleware;
