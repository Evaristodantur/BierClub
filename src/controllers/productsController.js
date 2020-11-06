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

    createProductAdd : (req, res, next) => {
        res.render('products/productAdd');
      },
  
    storeProductAdd : (req, res, next) => {
        let idMax = 0;

        //Creacion de ID para los productos nuevos
        productsJson.forEach(producto => {
            if ( idMax < producto.id ) {
                idMax = producto.id;
            }
        });
        idMax++;

        //Pushea el elemento al json
        let productoNuevo = req.body;
        productoNuevo.id = idMax;
        productsJson.push(productoNuevo);
        

        let productoConvertidosAJSON = JSON.stringify(productsJson);
        fs.writeFileSync(__dirname + "/../database/products.json", productoConvertidosAJSON);
        res.redirect('../');
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