let fs = require('fs');
let path = require('path');
let db = require("../database/models");
const {validationResult} = require("express-validator");
const e = require("express");

let mainController = {
    index: (req, res, next) => {
         db.Carts.findAll({
             include: [{association: 'products'}]
         })
            .then(carritos => {
                res.send(carritos)
            })
    },
    addProduct: (req, res, next) => {

        let userLogged = req.session.usuarioLogueado        

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
                    
                        Promise.resolve(db.Carts.create({
                            user_id: userLogged.id,
                            status: 0,
                            cart_product: req.params.id
                        }))
                        
                } else {
                    
                    //Agrega el producto en un carrito que ya tiene
                    db.Cart_Product.create({
                        product_id: req.params.id,
                        cart_id: cart.id
                    })

                    res.redirect('/carts')
                }

            })



            //Agrega el producto despues de crear el carrito en la DB
            /* db.Carts.findOne({
                where: {
                    user_id: userLogged.id,
                    status: 0
                },
                include: [{association: 'products'}]
            }).then(cart => {
                
                //Si el usuario logeado no tiene un carrito
                
                    //Agrega el producto en un carrito que ya tiene
                    db.Cart_Product.create({
                        product_id: req.params.id,
                        cart_id: cart.id
                    })

                    
                

            }) */

            res.redirect('/carts')


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