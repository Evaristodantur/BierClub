let fs = require('fs');
let path = require('path');
let db = require("../database/models");
const {validationResult} = require("express-validator");

let mainController = {
    index: (req, res, next) => {
         db.Products.findAll({
          include: [
            { association: 'images' },
            { association: 'carts', where: { user_id: userLogged.id, status: 0 } },
          ]
        }).then((products) => {
            console.log(products);
          res.send(products);
        });
    },






    addProduct: (req, res, next) => {
        
        let userLogged = req.session.usuarioLogueado        

        //Se fija si esta logeado
        if(userLogged) {
            
            db.Carts.findOne({
                where: {
                    user_id: userLogged.id,
                    status: 0
                },
                include: [
                    {association: 'products'}
                ]
            }).then(cart => {

                db.Products.findByPk(req.params.id)
                    .then(productEnStock => {

                        if(productEnStock.dataValues.stock > 0) {

                            db.Cart_Product.findOne({
                              where: {
                                cart_id: cart.id,
                                product_id: req.params.id,
                              },
                            }).then((productEnElCarrito) => {
                              if (productEnElCarrito == null) {
                                db.Cart_Product.create({
                                  product_id: req.params.id,
                                  cart_id: cart.id,
                                });
                              }
                            });

                        }
                        
                    });
                //Agrega el producto en un carrito que ya tiene
                
                

                

            })

        } else {
            res.redirect('/users/login')
        }
        
        
        
    },


    //  /products/productCart - Vista de productCart
    productCart : (req, res, next) => {
        let userLogged= req.session.usuarioLogueado;
        
        db.Products.findAll({
          include: [
            { association: 'images' },
            { association: 'carts', where: { user_id: userLogged.id, status: 0 } },
          ]
        }).then((products) => {
            console.log(products);
          res.render('products/productCart', { productos : products, userLogged: userLogged });
        });
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

    },













    itemsView: (req, res, next) => {
        db.Products.findAll({
            include: [{association: "images"}]
        }).then(products => {
            res.render('vistaDeItems', { productos : products });
        });
   }
}

module.exports = mainController;