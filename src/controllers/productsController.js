const path = require('path');
const fs = require('fs');

//Agregado database JSON
let productsJson = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/products.json'), 'utf-8'));

let productsController = {


    

    //  /products
    index : (req, res, next) => {
        res.render('products/products');
    },

    //  /products/productAdd - Pagina visual de agregar el producto
    productDetail : (req, res, next) => {
        let idUrl = req.params.id;

        let productoBuscado = productsJson.find(producto => producto.id == idUrl);

        productoBuscado ? (res.render("products/productDetail", productoBuscado)) : (res.render("error"));
    },

    // /products/productEdit/:id - Crea el producto
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
        res.redirect('/products/productAdmin');
    },





    // /products/productEdit/:id - Pagina visual de Modificacion del producto
    editProduct : (req, res, next) => {

        let idUrl = req.params.id;

        let productoEncontrado = productsJson.find( producto => producto.id == idUrl );

        productoEncontrado ? (res.render('products/productEdit', productoEncontrado)) : res.render('error')
    },

    // /products/productEdit/:id - Actualizacion/Modificacion del producto
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

        res.redirect('/products/productAdmin');
    },





    // /products/productEdit/borrar/:id - Borrar Producto
    deleteProduct : (req, res, next) => {
        let idUrl = req.params.id;

        let borrarProducto = productsJson.filter(function(producto) {
            return producto.id != idUrl;
        });

        let borrarProductoJSON = JSON.stringify(borrarProducto);
        fs.writeFileSync(__dirname + "/../database/products.json", borrarProductoJSON);

        res.redirect('/products/productAdmin');
    },




    //  /products/productAdmin
    productAdmin : (req, res, next) => {
        res.render('products/productAdmin', { productos : productsJson});
    },

    //  /products/productCart
    productCart : (req, res, next) => {
        res.render('products/productCart');
    }    
}

module.exports = productsController;