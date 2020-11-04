const path = require('path');
const fs = require('fs');

//Agregado database JSON
let productsJson = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/products.json'), 'utf-8'));

let productsController = {
    index : (req, res, next) => {
        res.render('products/products');
    },
    productDetail : (req, res, next) => {
        res.render('products/productDetail');
    },
    productAdd : (req, res, next) => {
        res.render('products/productAdd');
    },
    productCart : (req, res, next) => {
        res.render('products/productCart');
    },
    productEdit : (req, res, next) => {
        res.render('products/productEdit');
    },
    productAdmin : (req, res, next) => {
        res.render('products/productAdmin');
    }
}

module.exports = productsController;