// Validaciones de logueo

const { check, checkSchema } = require("express-validator");
const fs = require("fs");
const bcrypt = require('bcryptjs');
const path = require("path");
let db = require("../database/models");
let sequelize = db.sequelize;

let dbDirectory = path.resolve(__dirname, '../database/usuarios.json')
let usuariosJson = JSON.parse(fs.readFileSync(dbDirectory), 'utf-8');

let loginMiddleware = [
    check("email").notEmpty().withMessage("La dirección email no puede estar vacío")
        .isEmail().withMessage("La dirección email debe ser un email válido"),
    check("contrasenia").notEmpty().withMessage("La contraseña no puede estar vacía")
        .isLength({min:8}).withMessage("La contraseña debe tener al menos 8 caracteres")
]

module.exports = loginMiddleware