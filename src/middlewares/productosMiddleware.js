let path = require('path');
const { check, checkSchema } = require('express-validator'); //Express-validator

let productMiddleware =  [
        check('nombre').notEmpty().withMessage('no puede estar vacio')
                .isLength({min:3, max:61}).withMessage('debe tener entre 3 y 60 caracteres'),
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
                                         
                                options: (value, { req, errorMessage, files, paths }) => {
                                        if(req.imagenGuardada == undefined) {
                                                return true;
                                        }

                                        let extensionesValidas = ['.png', '.jpeg', 'jpg']
                                        for(let i=0; i < req.imagenGuardada.length; i++) {
                                                if ( !extensionesValidas.includes(path.extname(req.imagenGuardada[i].originalname))) {
                                                        return false;
                                                }
                                        }

                                        if(typeof req.files[0] == "undefined") {
                                                return false;
                                        }
                                        return true;
                                }
                        }, errorMessage : 'las imagenes deben ser .jpg, .png o .jpeg'
                }
        }),
        checkSchema({
                imagen: {
                        custom: {
                                 
                                options: (value, { req, errorMessage }) => {
                                        if (typeof req.files != 'undefined' && req.files.length > 4) {
                                                        return false;
                                        }

                                        return true;
                                }
                        }, errorMessage : 'deben ser 4 imagenes como maximo'

                }
        }),        
        checkSchema({
                imagen: {
                        custom: {
                                options: (value, { req }) => {
                                        for(let i=0; i < req.files.length; i++) {
                                                if (typeof req.files[i] != 'undefined') {
                                                        if (req.files[i].size > 4200000) {
                                                                return false;
                                                        }
                                                }
                                        }
                                        return true;
                                }
                        },
                        errorMessage : 'debe ser una imagen menor a 4mb'
                }
        })
]


module.exports = productMiddleware;