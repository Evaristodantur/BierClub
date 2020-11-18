let path = require('path');
const { check, checkSchema } = require('express-validator'); //Express-validator

let productMiddleware =  [
        check('nombre').notEmpty().withMessage('no puede estar vacio')
                .isLength({min:3, max:100}).withMessage('debe tener entre 3 y 100 caracteres'),
        check('precio').notEmpty().withMessage('no puede estar vacio')
                .isInt({min:0}).withMessage('debe ser un numero positivo'),
        check('descuento').notEmpty().withMessage('no puede estar vacio')
                .isInt({min:0, max:100}).withMessage('debe ser un numero del 0 al 100'),
        check('stock').notEmpty().withMessage('no puede estar vacio')
                .isInt({min:0}).withMessage('debe ser un numero positivo'),
        check('descripcion').isLength({max:280})
                .withMessage('solo acepta hasta 280 caracteres'),
        checkSchema({
                imagen: {
                        custom: {
                                options: (value, { req, location, paths }) => {

                                        if (typeof req.files[0] != 'undefined') {
                                                if (path.extname(req.files[0].originalname) != ".png" && 
                                                    path.extname(req.files[0].originalname) != ".jpg" &&
                                                    path.extname(req.files[0].originalname) != ".jpeg") {
                                                        return false;
                                                }
                                        }
                                        return true;
                                }
                        },
                        errorMessage : 'debe ser png, jpg o jpeg'
                }
        }),
        checkSchema({
                imagen: {
                        custom: {
                                options: (value, { req, location, paths }) => {

                                        if (typeof req.files[0] != 'undefined') {
                                                if (req.files[0].size > 3150000) {
                                                        return false;
                                                }
                                        }
                                        return true;
                                }
                        },
                        errorMessage : 'debe ser una imagen menor a 3mb'
                }
        })
]


module.exports = productMiddleware;