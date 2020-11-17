let path = require('path');
const { check, validationResult, body } = require('express-validator'); //Express-validator

let productMiddleware =  [
        check('nombre').isLength({min:3}).withMessage('El campo "nombre" debe tener al menos 3 caracteres y no estar vacio'),
        check('precio').isInt({min:0}).withMessage('El campo "precio" debe ser un numero positivo y no estar vacio'),
        check('descuento').isInt({min:0, max:100}).withMessage('El campo "descuento" debe ser un del 0 al 100'),
        check('stock').isInt({min:0}).withMessage('El campo "stock" debe ser un numero positivo y no estar vacio'),
        check('descripcion').isLength({max:280}).withMessage('El campo "descripcion" solo acepta hasta 280 caracteres')
]


module.exports = productMiddleware;