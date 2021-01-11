let db = require("../database/models");
const {validationResult} = require("express-validator");

let mainController = {
    index: (req, res, next) => {
         db.Products.findAll({
             order: [
                 ['id', 'DESC']
             ]
         })
            .then(products => {
                res.render('vistaPrueba', {productos: products});
            })
            /* res.render('vistaPrueba'); */
    },
    selector: (req, res, next) => {

        console.log(req.body.ordenar);
        if(req.body.ordenar == "nuevos-productos") {
            db.Products.findAll({
                order: [
                    ['id', 'DESC']
                ]
            })
            .then(products => {
                res.render('vistaPrueba', {productos: products});
            })
        }

        if(req.body.ordenar == "populares") {
            db.Products.findAll({
                order: [
                    ['stock', 'DESC']
                ]
            })
            .then(products => {
                res.render('vistaPrueba', {productos: products});
            })
        }

        if(req.body.ordenar == "menor-precio") {
            db.Products.findAll({
                order: [
                    ['price', 'ASC']
                ]
            })
            .then(products => {
                res.render('vistaPrueba', {productos: products});
            })
        }

        if(req.body.ordenar == "mayor-precio") {
            db.Products.findAll({
                order: [
                    ['stock', 'DESC']
                ]
            })
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