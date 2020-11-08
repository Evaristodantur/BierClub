const path = require('path');
const fs = require('fs');

//Agregado database JSON
let productsJson = fs.readFileSync(path.resolve(__dirname, '../database/products.json'), 'utf-8');
if(productsJson == "") {
    fs.writeFileSync(__dirname + "/../database/products.json", JSON.stringify(productsJson = []));
} else {
    productsJson = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/products.json'), 'utf-8'));
}

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
        if (req.files == "") {
            productoNuevo.imagen = "/images/productos/product-image-not-available.jpg";
        } else {
            productoNuevo.imagen = req.files[0].destination.substring(12) + '/' + req.files[0].filename
        }
        productsJson.push(productoNuevo);
        
        fs.writeFileSync(__dirname + "/../database/products.json", JSON.stringify(productsJson));
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
                if (req.files == "") {
                    producto.imagen = "/images/productos/product-image-not-available.jpg";
                } else {
                    producto.imagen = req.files[0].destination.substring(12) + '/' + req.files[0].filename
                }                
            }
            return producto;
        });

        fs.writeFileSync(__dirname + "/../database/products.json", JSON.stringify(productosModificado));

        res.redirect('/products/productAdmin');
    },





    // /products/productEdit/borrar/:id - Borrar Producto
    deleteProduct : (req, res, next) => {
        let idUrl = req.params.id;

        let borrarProducto = productsJson.filter(function(producto) {
            return producto.id != idUrl;
        });

        fs.writeFileSync(__dirname + "/../database/products.json", JSON.stringify(borrarProducto));

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