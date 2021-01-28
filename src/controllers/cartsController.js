let fs = require('fs');
let path = require('path');
let db = require("../database/models");
const {validationResult} = require("express-validator");



let mainController = {


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
          res.render('carts/productCart', { productos : products, userLogged: userLogged });
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





    deleteProductFromCart: (req, res, next) => {
      console.log(req.params.id);
      
      let userLogged = req.session.usuarioLogueado;

      if(userLogged) {
        db.Users.findOne({
          include: [
            {
              association: 'carts',
              where: { user_id: userLogged.id, status: 0 },
            },
          ],
        }).then(userCart => {
          
            db.Cart_Product.destroy({
              where: {
                cart_id: userCart.carts[0].dataValues.id,
                product_id: req.params.id
              }
            })

            res.redirect('/carts/productCart');
        });
      }
      
    },




    
    deleteAllProducts: (req, res, next) => {
      //console.log(req.params.id);

      let userLogged = req.session.usuarioLogueado;


      if(userLogged) {
        db.Users.findOne({
          include: [
            {
              association: 'carts',
              where: { user_id: userLogged.id, status: 0 },
            },
          ],
        }).then(userCart => {
          
            db.Cart_Product.destroy({
              where: {
                cart_id: userCart.carts[0].dataValues.id,
              },
            })
            res.redirect('/carts/productCart');
        });
      }

      
    },




    
    procederAlPago: (req, res, next) => {

      let userLogged = req.session.usuarioLogueado;

      if(userLogged) {
        db.Users.findOne({
          include: [
            {
              association: 'carts',
              where: { user_id: userLogged.id, status: 0 },
            },
          ],
        }).then(userCart => {
            
            

            db.Cart_Product.findOne({
              where: {
                cart_id: userCart.carts[0].dataValues.id
              }
            }).then(cartWithProducts => {

              if(cartWithProducts) {

                db.Carts.update(
                  {
                    status: 1
                  },
                  {
                    where: {
                      id: userCart.carts[0].dataValues.id,
                    },
                  }
                );

                db.Carts.create({
                  status: 0,
                  user_id: userCart.id,
                });

                res.send('Gracias por comprar');
              } else {
                res.send('No hay productos en su carrito');
              }
              
            });
            
                  

        });
      }

      
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