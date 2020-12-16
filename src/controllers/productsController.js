const path = require('path');
const fs = require('fs');
let db = require("../database/models");
let sequelize = db.sequelize;

//Middleware
let { validationResult } = require('express-validator');

//Agregado database JSON
let productsJson = fs.readFileSync(path.resolve(__dirname, '../database/products.json'), 'utf-8');
let dbDirectory = path.resolve(__dirname, '../database/products.json');

productsJson == "" ?
    fs.writeFileSync(dbDirectory, JSON.stringify(productsJson = [])) :
    productsJson = JSON.parse(fs.readFileSync(dbDirectory, 'utf-8'));


let productsController = {

    prueba : (req, res, next) => {
        db.Peliculas.findAll()
            .then(function(peliculas) {
                res.render("prueba", {peliculas:peliculas});
            });
    },
    

    //  /products - Vista Home
    index : (req, res, next) => {
        res.render('products/products', { productos : productsJson });
    },

    //  /products/productDetail/:id - Vista productDetail
    productDetail : (req, res, next) => {
        let idUrl = req.params.id;

        let productoBuscado = productsJson.find(producto => producto.id == idUrl);

        productoBuscado ? (res.render("products/productDetail", productoBuscado)) : (res.render("error"));
    },
    




    // /products/productAdd - Vista productAdd
    createProduct : (req, res, next) => {
        res.render('products/productAdd');
      },
  
    // /products/productAdd - Almacenamiento del producto en el JSON
    storeProduct : (req, res, next) => {

        let errores = validationResult(req);      

        if (!errores.isEmpty()) {
            
            return res.render('products/productAdd', {errors: errores.errors});
        }


            //Creacion de ID para los productos nuevos
            let idMax = 0;

            productsJson.forEach(producto => {
                if ( idMax < producto.id ) {
                    idMax = producto.id;
                }
            });
            idMax++; //Le sumo uno a la ID para que no se repita

            //Crea el elemento nuevo
            let productoNuevo = {
                id : parseInt(idMax),
                nombre : req.body.nombre,
                precio : parseInt(req.body.precio),
                descuento : parseInt(req.body.descuento),
                stock : parseInt(req.body.stock),
                categoria : req.body.categoria,
                descripcion : req.body.descripcion,
                imagen : ['product-image-not-available.jpg']
            }

            //Agrega las imagenes
            let imagenes = [];                
            for(let i=0; i < 4; i++) {
                if(typeof req.files[i] != "undefined") {
                    imagenes.push(req.files[i].filename)
                }
            }

            if (typeof imagenes[0] != "undefined") {
                productoNuevo.imagen = imagenes
            }
            

            //Lo guarda en el array Json
            productsJson.push(productoNuevo);
            
            fs.writeFileSync(dbDirectory, JSON.stringify(productsJson));
            res.redirect('/products/productAdmin');
    },





    // /products/productEdit/:id - Pagina visual de Modificacion del producto
    editProduct : (req, res, next) => {

        let idUrl = req.params.id;

        let productoEncontrado = productsJson.find( producto => producto.id == idUrl );

        productoEncontrado ? (res.render('products/productEdit', {producto: productoEncontrado})) : res.render('error')
    },

    // /products/productEdit/:id - Actualizacion/Modificacion del producto en el JSON
    updateProduct : (req, res, next) => {

        let idUrl = req.params.id;

        //Validacion
        let errores = validationResult(req);
        if (!errores.isEmpty()) {

            let productoEncontrado = productsJson.find( producto => producto.id == idUrl );
            productoEncontrado.errors = errores.errors

            return res.render('products/productEdit', {producto: productoEncontrado});
        }

        
        //Modificacion del producto
        let productosModificado = productsJson.map( function(producto) {
            if (producto.id == idUrl) {
                //Backup De Productos, para usar la ID y la Imagen
                let productoBackUp = producto;

                //Pido los datos del formulario con los datos cambiados
                producto = {
                    id : parseInt(productoBackUp.id),
                    nombre : req.body.nombre,
                    precio : parseInt(req.body.precio),
                    descuento : parseInt(req.body.descuento),
                    stock : parseInt(req.body.stock),
                    categoria : req.body.categoria,
                    descripcion : req.body.descripcion
                }

                 if (typeof req.files[0] == "undefined") {
                    producto.imagen = productoBackUp.imagen;
                } else {

                    let imagenes = [];                
                    for(let i=0; i < 4; i++) {
                        if(typeof req.files[i] != "undefined") {
                            imagenes.push(req.files[i].filename)
                        }
                    }

                    if (typeof imagenes[0] != "undefined") {
                        producto.imagen = imagenes
                    }

                }
            }
            return producto;
        });

        fs.writeFileSync(dbDirectory, JSON.stringify(productosModificado));

        res.redirect('/products/productAdmin');
    },





    // /products/productEdit/borrar/:id - Borrar Producto del JSON
    deleteProduct : (req, res, next) => {
        let idUrl = req.params.id;

        let borrarProducto = productsJson.filter( producto => producto.id != idUrl );

        fs.writeFileSync(dbDirectory, JSON.stringify(borrarProducto));

        res.redirect('/products/productAdmin');
    },




    //  /products/productAdmin - Vista de productAdmin
    productAdmin : (req, res, next) => {
        res.render('products/productAdmin', { productos : productsJson });
    },

    //  /products/productCart - Vista de proudctCart
    productCart : (req, res, next) => {
        res.render('products/productCart');
    }
}

module.exports = productsController;