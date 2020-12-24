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

        db.Products.findAll({
            include: [{association: "images"}]
        }).then(function(products){
            res.send({ productos : products });
        })
    },
    

    //  /products - Vista Home
    index : (req, res, next) => {
        db.Products.findAll({
            include: [{association: "images"}]
        }).then(function(products){
            console.log(products[0].images[0].dataValues.name);
            res.render('products/products', { productos : products });
        })
    },

    //  /products/productDetail/:id - Vista productDetail
    productDetail : (req, res, next) => {
        let idUrl = req.params.id;

        /* let productoBuscado = productsJson.find(producto => producto.id == idUrl); */

        db.Products.findByPk(idUrl, {
            include: [{association: "images"}]
        }).then(function(product){
            console.log(product);
            product ? (res.render("products/productDetail", {producto: product})) : (res.render("error"));
            /* res.render('products/products', { productos : products }); */
        })
        //product ? (res.render("products/productDetail", {producto: product})) : (res.render("error"));
        /* productoBuscado ? (res.render("products/productDetail", productoBuscado)) : (res.render("error")); */
    },
    




    // /products/productAdd - Vista productAdd
    createProduct : (req, res, next) => {
        db.Categories.findAll()
            .then(function(categories) {
                res.render('products/productAdd', {categories: categories});
            }).catch(function(error){
                console.log("Error");
                res.send(error);
            }); 
      },
  
    // /products/productAdd - Almacenamiento del producto en el JSON
    storeProduct : (req, res, next) => {
     
        let errores = validationResult(req);
        if (!errores.isEmpty()) {

            db.Categories.findAll()
            .then(function(categories) {               
                return res.render('products/productAdd', {errors: errores.errors, categories: categories});
            }).catch(function(error){
                console.log("Error");
                res.send(error);
            });
            
        } else {

        db.Categories.findOne({
            where: {
                name: req.body.categoria
            }
        })
            .then(function(categories) {
                

                if(typeof req.files[0] != "undefined") {

                    let imagenes = [];                
                    for(let i=0; i < 4; i++) {
                        if(typeof req.files[i] != "undefined") {
                            imagenes.push({
                                name: req.files[i].filename
                            })
                        }
                    }
                    db.Products.create({
                        name: req.body.nombre,
                        price: req.body.precio,
                        discount: req.body.descuento,
                        stock: req.body.stock,
                        description: req.body.descripcion,
                        category_id: categories.dataValues.id,
                        images: imagenes
                    }, {
                        include: [{association: "images"}]
                    });
                } else {
                    db.Products.create({
                        name: req.body.nombre,
                        price: req.body.precio,
                        discount: req.body.descuento,
                        stock: req.body.stock,
                        description: req.body.descripcion,
                        category_id: categories.dataValues.id
                    });
                }
                
            }).catch(function(error){
                console.log("Error");
                res.send(error);
            });

            res.redirect('/products/productAdmin');
        }
        /* let errores = validationResult(req);      

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
            
            fs.writeFileSync(dbDirectory, JSON.stringify(productsJson)); */
    },





    // /products/productEdit/:id - Pagina visual de Modificacion del producto
    editProduct : (req, res, next) => {

        let idUrl = req.params.id;

        //let productoEncontrado = productsJson.find( producto => producto.id == idUrl );

        db.Categories.findAll()
            .then(function(categories) {
                db.Products.findByPk(idUrl)
                    .then(function(product){
                        product ? (res.render('products/productEdit', {producto: product, categories: categories})) : res.render('error')
                    })
                    .catch(function(error){
                        console.log("Error");
                        res.send(error);
                    })
                
            }).catch(function(error){
                console.log("Error");
                res.send(error);
            });
    },

    // /products/productEdit/:id - Actualizacion/Modificacion del producto en el JSON
    updateProduct : (req, res, next) => {

        let idUrl = req.params.id;

        /* db.Categories.findOne({
            where: {
                name: req.body.categoria
            }
        })
            .then(function(categories) {
                db.Products.update({
                    name: req.body.nombre,
                    price: req.body.precio,
                    discount: req.body.ddescuento,
                    stock: req.body.stock,
                    description: req.body.descripcion,
                    category_id: categories.dataValues.id
                }, {
                    where: {
                        id: req.params.id
                    }
                });
            }) */

            

            
        let errores = validationResult(req);
        if (!errores.isEmpty()) {
            db.Categories.findAll()
            .then(function(categories) {
                db.Products.findByPk(idUrl)
                    .then(function(product){
                        console.log(errores);
                        product.errors = errores.errors
                        console.log(product);
                        return res.render('products/productEdit', {producto: product, errors: errores.errors, categories: categories});
                    })
                    .catch(function(error){
                        console.log("Error");
                        res.send(error);
                    })
                
            }).catch(function(error){
                console.log("Error");
                res.send(error);
            });
        } else {



            db.Categories.findOne({
                where: {
                    name: req.body.categoria
                }
            })
                .then(function(categories) {
    
                     if(typeof req.files[0] != "undefined") {
    
                        let imagenes = [];                
                        for(let i=0; i < 4; i++) {
                            if(typeof req.files[i] != "undefined") {
                                imagenes.push({
                                    name: req.files[i].filename
                                })
                            }
                        }

                        db.Products.create({
                            name: req.body.nombre,
                            price: req.body.precio,
                            discount: req.body.descuento,
                            stock: req.body.stock,
                            description: req.body.descripcion,
                            category_id: categories.dataValues.id,
                            images: imagenes
                        }, {
                            include: [{association: "images"}]
                        });

                        db.Products.destroy({
                            where: {
                                id: idUrl
                            }
                        })

                    } else {
                        db.Products.update({
                            name: req.body.nombre,
                            price: req.body.precio,
                            discount: req.body.descuento,
                            stock: req.body.stock,
                            description: req.body.descripcion,
                            category_id: categories.dataValues.id
                        }, {
                            where: {
                                id: idUrl
                            }
                        });
                    }
                    
                }).catch(function(error){
                    console.log("Error en la actualizacion del producto");
                    res.send(error);
                }); 
    
                

                res.redirect('/products/productAdmin');
        }
        
        /* let idUrl = req.params.id;

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

        res.redirect('/products/productAdmin'); */
    },





    // /products/productEdit/borrar/:id - Borrar Producto del JSON
    deleteProduct : (req, res, next) => {
        let idUrl = req.params.id;

        db.Products.destroy({
            where: {
                id: idUrl
            }
        })

        /* let borrarProducto = productsJson.filter( producto => producto.id != idUrl );

        fs.writeFileSync(dbDirectory, JSON.stringify(borrarProducto)); */

        res.redirect('/products/productAdmin');
    },




    //  /products/productAdmin - Vista de productAdmin
    productAdmin : (req, res, next) => {

        db.Products.findAll({
            include: [{association: "images"}]
        }).then(function(products){
            console.log(products[0].images[0].dataValues.name);
            res.render('products/productAdmin', { productos : products });
        })

        
    },

    //  /products/productCart - Vista de proudctCart
    productCart : (req, res, next) => {
        res.render('products/productCart');
    }
}

module.exports = productsController;