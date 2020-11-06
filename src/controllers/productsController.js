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

    // Creacion del producto
    createProduct : (req, res, next) => {
        res.render('products/productAdd');
      },
  
    storeProduct : (req, res, next) => {
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

    // Pagina de Modificacion del producto
    editProduct : (req, res, next) => {

        let idUrl = req.params.id;

        let productoEncontrado = productsJson.find( producto => producto.id == idUrl );

        productoEncontrado ? (res.render('products/productEdit', productoEncontrado)) : res.render('error')
    },

    // Actualizacion del producto
    updateProduct : (req, res, next) => {
        let idUrl = req.params.id;

        let productosModificado = productsJson.map( function(producto) {
            if (producto.id == idUrl) {
                let productoID = producto.id;
                producto = req.body;
                producto.id = productoID;
            }
            return producto;
        });

        let productosModificadoJSON = JSON.stringify(productosModificado);
        fs.writeFileSync(__dirname + "/../database/products.json", productosModificadoJSON);

        res.redirect('../');
    },

    //  Borrar Producto
    deleteProduct : (req, res, next) => {
        res.render('products/productEdit');
    },

    //  /products/productAdd
    productCart : (req, res, next) => {
        res.render('products/productCart');
    },

    //  /products/productAdmin
    productAdmin : (req, res, next) => {
        res.render('products/productAdmin');
    }
}

module.exports = productsController;