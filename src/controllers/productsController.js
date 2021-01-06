const path = require('path');
const fs = require('fs');
let db = require("../database/models");
let sequelize = db.sequelize;

//Middleware
let { validationResult } = require('express-validator');


let productsController = {

    //Para realizar pruebas
    prueba : (req, res, next) => {

        db.Products.findAll({
                include: [{association: 'images'}]
            }).then(products => {
                res.send(products);
            }).catch(error => {
                console.log(error);
            });
    },
    



    //  /products - Vista Home
    index : (req, res, next) => {

        //Home - Encuentra todos los productos con sus imagenes y las renderiza
        db.Products.findAll({
                include: [{association: "images"}]
            }).then(products => {
                res.render('products/products', { productos : products });
            }).catch(error  => {
                console.log(error);
            });
    },




    //  /products/productDetail/:id - Vista productDetail
    productDetail : (req, res, next) => {
        let idUrl = req.params.id;

        //Renderiza el producto por el ID
        db.Products.findByPk(idUrl, {
                include: [{association: "images"}]
            }).then(product => {
                product ? (res.render("products/productDetail", {producto: product})) : (res.render("error"));
            }).catch(error => {
                console.log(error);
            });
    },
    




    // /products/productAdd - Vista productAdd
    createProduct : (req, res, next) => {

        //Renderiza la tabla categorias en /productAdd
        db.Categories.findAll()
            .then(categories => {
                res.render('products/productAdd', {categories: categories});
            }).catch(error => {
                console.log(error);
            });
    },
  



    // /products/productAdd - Almacenamiento del producto en el JSON
    storeProduct : (req, res, next) => {
     
        //Toma los errores
        let errores = validationResult(req);
        if (!errores.isEmpty()) {

            //Renderiza las categorias con los errores en /productAdd
            db.Categories.findAll()
            .then(categories => {               
                return res.render('products/productAdd', {errors: errores.errors, categories: categories});
            }).catch(error => {
                console.log(error);
            });
            

        } else {

            //Toma la tabla de categorias
            db.Categories.findOne({
                where: {
                    name: req.body.categoria
                }
            }).then(categories => {
                
                //Si encuentra imagenes cargadas, las guarda
                if(typeof req.files[0] != "undefined") {

                    let imagenes = [];                
                    for(let i=0; i < 4; i++) {
                        if(typeof req.files[i] != "undefined") {
                            imagenes.push({
                                name: req.files[i].filename
                            });
                        }
                    }

                    //Crea el producto con sus respectivas imagenes cargadas
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
                    }).catch(error => {
                        console.log(error);
                    });


                } else {


                    //Crea el producto pero sin las imagenes
                    db.Products.create({
                        name: req.body.nombre,
                        price: req.body.precio,
                        discount: req.body.descuento,
                        stock: req.body.stock,
                        description: req.body.descripcion,
                        category_id: categories.dataValues.id
                    }).catch(error => {
                        console.log(error);
                    });

                }
                
            }).catch(error => {
                console.log(error);
            });

            res.redirect('/products/productAdmin');
        }
    },





    // /products/productEdit/:id - Pagina visual de Modificacion del producto
    editProduct : (req, res, next) => {

        let idUrl = req.params.id;

        //Busca todas las categorias, y el producto - los renderiza junto a la vista /productEdit/:id
        db.Categories.findAll()
            .then(categories => {
                db.Products.findByPk(idUrl)
                    .then(product => {
                        product ? (res.render('products/productEdit', {producto: product, categories: categories})) : res.render('error');
                    }).catch(error => {
                        console.log(error);
                    });
                
            }).catch(error => {
                console.log(error);
            });
    },

    // /products/productEdit/:id - Actualizacion/Modificacion del producto en el JSON
    updateProduct : (req, res, next) => {

        let idUrl = req.params.id;   
            
        //Toma los errores
        let errores = validationResult(req);

        //Se fija si hay errores
        if (!errores.isEmpty()) {

            //Busca las categorias
            db.Categories.findAll()
            .then(categories => {

                //Busca el producto
                db.Products.findByPk(idUrl)
                    .then(product => {
                        product.errors = errores.errors;
                        return res.render('products/productEdit', {producto: product, errors: errores.errors, categories: categories});
                    }).catch(error => {
                        console.log(error);
                    });
                
            }).catch(error => {
                console.log(error);
            });


        } else {

            //Busca las categorias
            db.Categories.findOne({
                where: {
                    name: req.body.categoria
                }
            })
                .then(categories => {
    
                    //Se fija si se cargaron imagenes
                     if(typeof req.files[0] != "undefined") {
    
                        let imagenes = [];                
                        for(let i=0; i < 4; i++) {
                            if(typeof req.files[i] != "undefined") {
                                imagenes.push({
                                    name: req.files[i].filename
                                });
                            }
                        }

                        //Modifica el producto con las imagenes
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
                        }).catch(error => {
                            console.log(error);
                        });

                        db.Products.destroy({
                            where: {
                                id: idUrl
                            }
                        }).catch(error => {
                            console.log(error);
                        });

                    } else {

                        //Modifica el producto sin imagenes, si es que no se cargo ninguna
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
                        }).catch(error => {
                            console.log(error);
                        });
                    }
                    
                }).catch(error => {
                    console.log(error);
                });

                res.redirect('/products/productAdmin');
        }
        
    },





    // /products/productEdit/borrar/:id - Borrar Producto del JSON
    deleteProduct : (req, res, next) => {
        let idUrl = req.params.id;

        //Borra el producto de la base de datos
        db.Products.destroy({
            where: {
                id: idUrl
            }
        }).catch(error  => {
            console.log(error);
        });

        res.redirect('/products/productAdmin');
    },





    //  /products/productAdmin - Vista de productAdmin
    productAdmin : (req, res, next) => {

        //Muestra todos los productos con sus imagenes
        db.Products.findAll({
            include: [{association: "images"}]
        }).then(products => {
            res.render('products/productAdmin', { productos : products });
        }).catch(error => {
            console.log(error);
        });    
    },





    //  /products/productCart - Vista de productCart
    productCart : (req, res, next) => {
        res.render('products/productCart');
    }
}

module.exports = productsController;