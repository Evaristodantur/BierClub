let db = require("../database/models");
const {validationResult} = require("express-validator");

let mainController = {
    index: (req, res, next) => {
         db.Products.findAll()
            .then(products => {
                res.render('vistaPrueba', {productos: products});
            })
            /* res.render('vistaPrueba'); */
    },
    selector: (req, res, next) => {

        console.log(req.body.ordenar);
        if(req.body.ordenar == "nuevos-productos") {
            db.Products.findAll()
            .then(products => {
                res.render('vistaPrueba', {productos: products});
            })
        }

        if(req.body.ordenar == "mas-vendidos") {
            db.Products.findAll()
            .then(products => {
                res.render('vistaPrueba', {productos: products});
            })
        }

        if(req.body.ordenar == "populares") {
            db.Products.findAll()
            .then(products => {
                res.render('vistaPrueba', {productos: products});
            })
        }

        if(req.body.ordenar == "mas-vendidos") {
            db.Products.findAll()
            .then(products => {
                res.render('vistaPrueba', {productos: products});
            })
        }

        if(req.body.ordenar == "especiales") {
            db.Products.findAll()
            .then(products => {
                res.render('vistaPrueba', {productos: products});
            })
        }
        
    },





    addProduct: (req, res, next) => {
        
    },
    deleteProduct: (req, res, next) => {

    },
    editCart: (req, res, next) => {

    }
}

module.exports = mainController;