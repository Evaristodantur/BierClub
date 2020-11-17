let path = require('path');
const { check, validationResult, body } = require('express-validator'); //Express-validator

let productMiddleware =  [
        check('nombre').isLength({min:3, max:100}).withMessage('debe tener entre 3 y 100 caracteres'),
        check('precio').isInt({min:0}).withMessage('debe ser un numero positivo y no estar vacio'),
        check('descuento').isInt({min:0, max:100}).withMessage('debe ser un numero del 0 al 100'),
        check('stock').isInt({min:0}).withMessage('debe ser un numero positivo y no estar vacio'),
        check('descripcion').isLength({max:280}).withMessage('solo acepta hasta 280 caracteres')
]


module.exports = productMiddleware;