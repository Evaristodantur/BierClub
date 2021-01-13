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

        //Se fija si esta logeado
        if(userLogged) {
            
            db.Carts.findOne({
                where: {
                    user_id: userLogged.id,
                    status: 0
                },
                include: [{association: 'products'}]
            }).then(cart => {
                
                //Agrega el producto en un carrito que ya tiene
                db.Cart_Product.create({
                    product_id: req.params.id,
                    cart_id: cart.id
                })

                res.redirect('/carts')

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

    },













    searchView: (req, res, next) => {
        res.render('vistaDeBusqueda');
   },  
   search: (req, res, next) => {
    console.log([db.Sequelize.Op.like]);
    console.log(req.query.search);

    db.Products.findAll({
        where: {
            
                name: {[db.Sequelize.Op.like] : `%${req.query.search}%`}
            
        }
    })
        .then(products => {
            res.send(products)
        })

}
}

module.exports = mainController;