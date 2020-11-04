const path = require('path');
const fs = require('fs');

//Agregado database JSON
let productsJson = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/products.json'), 'utf-8'));

let productsController = {

    //  /products
    index : (req, res, next) => {
        res.render('products/products');
    },

    //  /products/productDetail/:id
    productDetail : (req, res, next) => {
        let idUrl = req.params.id;

        let productoBuscado = productsJson.find(producto => producto.id == idUrl);

        productoBuscado ? (res.render("products/productDetail", productoBuscado)) : (res.render("error"));
    },

    //  /products/productAdd
    productAdd : (req, res, next) => {
        res.render('products/productAdd');
    },

    //  /products/productAdd
    productCart : (req, res, next) => {
        res.render('products/productCart');
    },

    //  /products/productEdit
    productEdit : (req, res, next) => {
        res.render('products/productEdit');
    },

    //  /products/productAdmin
    productAdmin : (req, res, next) => {
        res.render('products/productAdmin');
    }
}

module.exports = productsController;