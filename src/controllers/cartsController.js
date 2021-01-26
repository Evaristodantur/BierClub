let fs = require('fs');
let path = require('path');
let db = require("../database/models");
const {validationResult} = require("express-validator");



let mainController = {

  //  /carts - Render
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





    //  /carts/addProduct/:id - POST
    addProduct: (req, res, next) => {
        
        let userLogged = req.session.usuarioLogueado        

        //Se fija si el usuario esta logueado
        if(userLogged) {
            
            //Busca un carrito que este en status 0 de ese usuario
            db.Carts.findOne({
                where: {
                    user_id: userLogged.id,
                    status: 0
                },
                include: [
                    {association: 'products'}
                ]
            }).then(cart => {

                //Busca el producto a agregar pasado por el id
                db.Products.findByPk(req.params.id)
                    .then(productEnStock => {

                      //Se fija si se encuentra en stock
                        if(productEnStock.dataValues.stock > 0) {

                          //Busca en el carrito del usuario si el producto se encuentra agregado
                            db.Cart_Product.findOne({
                              where: {
                                cart_id: cart.id,
                                product_id: req.params.id,
                              },
                            }).then((productEnElCarrito) => {

                              //Si no se encuentra agregado lo agrega, sino no (solo 1 producto por carrito)
                              if (productEnElCarrito == null) {
                                db.Cart_Product.create({
                                  product_id: req.params.id,
                                  cart_id: cart.id,
                                });
                              }
                            });

                        }
                        
                    });
            });

        } else {

            //Si no esta logueado lo manda a loguearse (esto se va a cambiar para tener carrito de invitado)
            res.redirect('/users/login')
        }
        
    },






    //  /carts/productCart - Render de productCart
    productCart : (req, res, next) => {
      //Toma el usuario logueado
        let userLogged= req.session.usuarioLogueado;
        
        //Busca los productos que se encuentren en un carrito del usuario logueado
        db.Products.findAll({
          include: [
            { association: 'images' },
            { association: 'carts', where: { user_id: userLogged.id, status: 0 } },
          ]
        }).then((products) => {
            
          //Muestra los productos
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