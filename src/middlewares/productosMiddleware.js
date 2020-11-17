let path = require('path');
const { check, validationResult, body } = require('express-validator'); //Express-validator

let productMiddleware =  [
        check('nombre').notEmpty().withMessage('no puede estar vacio').isLength({min:3, max:100}).withMessage('debe tener entre 3 y 100 caracteres'),
        check('precio').notEmpty().withMessage('no puede estar vacio').isInt({min:0}).withMessage('debe ser un numero positivo'),
        check('descuento').notEmpty().withMessage('no puede estar vacio').isInt({min:0, max:100}).withMessage('debe ser un numero del 0 al 100'),
        check('stock').notEmpty().withMessage('no puede estar vacio').isInt({min:0}).withMessage('debe ser un numero positivo'),
        check('descripcion').isLength({max:280}).withMessage('solo acepta hasta 280 caracteres')
]


module.exports = productMiddleware;