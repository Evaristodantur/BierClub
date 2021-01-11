let db = require("../database/models");
const {validationResult} = require("express-validator");

let mainController = {
    index: (req, res, next) => {
         db.Carts.findAll()
            .then(carts => {
                res.send(carts)
            })
    },
    addProduct: (req, res, next) => {

        let userLogged = req.session.usuarioLogueado

        console.log(req.session.usuarioLogueado);

        if(userLogged) {
            db.Carts.findOne({
                where: {
                    user_id: userLogged.id,
                    status: 0
                },
                include: [{association: 'products'}]
            }).then(cart => {

                //Si el usuario logeado no tiene un carrito
                if(cart == null) {
                    if(userLogged) {
                        db.Carts.create({
                            user_id: userLogged.id,
                            status: 0
                        })
                    }
                } else {
                    res.send(cart)
                }
        
            })
        } else {
            res.redirect('/users/login')
        }
        
        
        
    },





    addProductView: (req, res, next) => {
        db.Products.findAll()
            .then(products => {
                res.render('vistaPrueba', {productos : products})
            })
    },
    deleteProduct: (req, res, next) => {

    },
    editCart: (req, res, next) => {

    }
}

module.exports = mainController;