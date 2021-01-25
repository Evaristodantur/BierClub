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
                include: [{association: "images"}], 
                order: [
                    ['id', 'DESC']
                ]
            }).then(products => {
                db.Products.findAll({
                  include: [{ association: 'images' }],
                  where: {
                    stock: { [db.Sequelize.Op.gt]: 0 },
                  }
                }).then(productInStock => {
                    console.log(productInStock);
                    res.send(products);
                })
                            
            });
    },
    



    //  /products - Vista Home
    index : (req, res, next) => {

        //Home - Encuentra todos los productos con sus imagenes y las renderiza
        db.Products.findAll({
                include: [{association: "images"}], 
                order: [
                    ['id', 'DESC']
                ]
            }).then(products => {
                db.Categories.findAll({
                    where: {
                        status: 1
                    }
                })
                    .then(categories => {
                        res.render('products/products', { productos : products, categorias: categories, userLogged : req.session.usuarioLogueado });
                    })
                
                
            });
    },





    //  /products - Filtro de Productos
    productFilter : (req, res, next) => {
        console.log(req.url);
        console.log(req.query.ordenar);

        //Se fija si la url es /products
        if(req.url.includes('/productAdmin')) {

            //Se fija si la url es /products/productAdmin


            //Filtro de Nuevos Productos
            if(req.query.ordenar == "nuevos-productos") {
                db.Products.findAll({
                    include: [{association: "images"}], 
                    order: [
                        ['id', 'DESC']
                    ]
                }).then(products => {
                    db.Categories.findAll({
                        where: {
                            status: 1
                        }
                    })
                        .then(categories => {
                            res.render('products/productAdmin', { productos : products, categorias: categories, nuevosProductosSelected : 1, userLogged : req.session.usuarioLogueado });
                        });
                    
                });
            }

            //Filtro de Populares
            if(req.query.ordenar == "populares") {
                db.Products.findAll({
                    include: [{association: "images"}], 
                    order: [
                        ['stock', 'DESC']
                    ]
                }).then(products => {
                    db.Categories.findAll({
                        where: {
                            status: 1
                        }
                    })
                        .then(categories => {
                            res.render('products/productAdmin', { productos : products, categorias: categories, popularesSelected : 1, userLogged : req.session.usuarioLogueado });
                        });
                    
                });
            }

            //Filtro de Menor Precio
            if(req.query.ordenar == "menor-precio") {
                db.Products.findAll({
                    include: [{association: "images"}], 
                    order: [
                        ['price', 'ASC']
                    ]
                }).then(products => {
                    db.Categories.findAll({
                        where: {
                            status: 1
                        }
                    })
                        .then(categories => {
                            res.render('products/productAdmin', { productos : products, categorias: categories, menorPrecioSelected : 1, userLogged : req.session.usuarioLogueado });
                        });
                    
                });
            }

            //Filtro de Mayor Precio
            if(req.query.ordenar == "mayor-precio") {
                db.Products.findAll({
                    include: [{association: "images"}], 
                    order: [
                        ['price', 'DESC']
                    ]
                }).then(products => {
                    db.Categories.findAll({
                        where: {
                            status: 1
                        }
                    })
                        .then(categories => {
                            res.render('products/productAdmin', { productos : products, categorias: categories, mayorPrecioSelected : 1, userLogged : req.session.usuarioLogueado });
                        });
                    
                });
            }
            


        } else {


            //Filtro de Nuevos Productos
            if(req.query.ordenar == "nuevos-productos") {
                db.Products.findAll({
                    include: [{association: "images"}], 
                    order: [
                        ['id', 'DESC']
                    ]
                }).then(products => {
                    db.Categories.findAll({
                    where: {
                        status: 1
                    }
                })
                    .then(categories => {
                        res.render('products/products', { productos : products, categorias: categories, nuevosProductosSelected : 1, userLogged : req.session.usuarioLogueado });
                    })
                    
                });
            }

            //Filtro de Populares
            if(req.query.ordenar == "populares") {
                db.Products.findAll({
                    include: [{association: "images"}], 
                    order: [
                        ['stock', 'DESC']
                    ]
                }).then(products => {
                    db.Categories.findAll({
                    where: {
                        status: 1
                    }
                })
                    .then(categories => {
                        res.render('products/products', { productos : products, categorias: categories, popularesSelected : 1, userLogged : req.session.usuarioLogueado });
                    })
                    
                });
            }

            //Filtro de Menor Precio
            if(req.query.ordenar == "menor-precio") {
                db.Products.findAll({
                    include: [{association: "images"}], 
                    order: [
                        ['price', 'ASC']
                    ]
                }).then(products => {
                    db.Categories.findAll({
                        where: {
                            status: 1
                        }
                    })
                        .then(categories => {
                            res.render('products/products', { productos : products, categorias: categories, menorPrecioSelected : 1, userLogged : req.session.usuarioLogueado });
                        })
                    
                });
            }

            //Filtro de Mayor Precio
            if(req.query.ordenar == "mayor-precio") {
                db.Products.findAll({
                    include: [{association: "images"}], 
                    order: [
                        ['price', 'DESC']
                    ]
                }).then(products => {
                    db.Categories.findAll({
                        where: {
                            status: 1
                        }
                    })
                        .then(categories => {
                            res.render('products/products', { productos : products, categorias: categories, mayorPrecioSelected : 1, userLogged : req.session.usuarioLogueado });
                        })
                    
                });
            }

            
        }

        
        
        
    },





    //Buscador de productos en /products y /productAdmin
    productSearch : (req, res, next) => {
        
        if(req.url.search("productAdmin") == "1") {

            //Buscado para /productAdmin
            db.Products.findAll({
                include: [{association: "images"}], 
                order: [
                    ['id', 'DESC']
                ],
                where: {
                    name: {[db.Sequelize.Op.like] : `%${req.query.search}%`}
                }
            }).then(products => {
                db.Categories.findAll({
                    where: {
                        status: 1
                    }
                })
                    .then(categories => {
                        res.render('products/productAdmin', { productos : products, categorias: categories, userLogged : req.session.usuarioLogueado});
                    });
                     
            });

        } else {

            //Buscador para /product
            db.Products.findAll({
                include: [{association: "images"}], 
                order: [
                    ['id', 'DESC']
                ],
                where: {
                    name: {[db.Sequelize.Op.like] : `%${req.query.search}%`}
                }
            }).then(products => {
                db.Categories.findAll({
                    where: {
                        status: 1
                    }
                })
                    .then(categories => {
                        res.render('products/products', { productos : products, categorias: categories, userLogged : req.session.usuarioLogueado});
                    });
                    
            });
        }

    },





    //  /products/productDetail/:id - Vista productDetail
    productCategorieFilter : (req, res, next) => {
        console.log(req.url);
        
        let categorieSelected = req.query.filtroCategoria
        console.log(categorieSelected);

        if(req.url.includes('/productAdmin')) {
            db.Products.findAll({
                include: [{association: "images"}, {association: "categories", where: { id: categorieSelected}}], 
                order: [
                    ['id', 'DESC']
                ]
            }).then(products => {
                
                    db.Categories.findAll({
                        where: {
                            status: 1
                        }
                    })
                        .then(categories => {                
                            res.render('products/productAdmin', { productos : products, categorias: categories, categoriaSeleccionada: categorieSelected, userLogged : req.session.usuarioLogueado});
                        })
    
                
            });
        } else {
            db.Products.findAll({
                include: [{association: "images"}, {association: "categories", where: { id: categorieSelected}}], 
                order: [
                    ['id', 'DESC']
                ]
            }).then(products => {
                
                    db.Categories.findAll({
                        where: {
                            status: 1
                        }
                    })
                        .then(categories => {                
                            res.render('products/products', { productos : products, categorias: categories, categoriaSeleccionada: categorieSelected, userLogged : req.session.usuarioLogueado});
                        })
    
                
            });
        }

    },






    //  /products/productDetail/:id - Vista productDetail
    productDetail : (req, res, next) => {
        let idUrl = req.params.id;

        //Renderiza el producto por el ID
        db.Products.findByPk(idUrl, {
                include: [{association: "images"}]
            }).then(product => {
                if(product) {
                    db.Products.findAll({
                        include: [{association: "images"}],
                        where: {
                            category_id: product.category_id
                        }
                    })
                        .then(products => {
                            res.render("products/productDetail", {productosRelacionados : products, producto: product, userLogged : req.session.usuarioLogueado})
                    });

                } else {

                    res.render("error", { userLogged : req.session.usuarioLogueado })
                }
    
                
                
            });
    },
    




    // /products/productAdd - Vista productAdd
    createProduct : (req, res, next) => {

        //Renderiza la tabla categorias en /productAdd
        db.Categories.findAll()
            .then(categories => {
                res.render('products/productAdd', {categories: categories, userLogged : req.session.usuarioLogueado});
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
                return res.render('products/productAdd', {errors: errores.errors, categories: categories, userLogged : req.session.usuarioLogueado});
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
                    });

                }
                
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
                        product ? (res.render('products/productEdit', {producto: product, categories: categories, userLogged : req.session.usuarioLogueado})) : res.render('error', { userLogged : req.session.usuarioLogueado });
                    });
                
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
                        return res.render('products/productEdit', {producto: product, errors: errores.errors, categories: categories, userLogged : req.session.usuarioLogueado});
                    });
                
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
                        });

                        db.Products.destroy({
                            where: {
                                id: idUrl
                            }
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
                        });
                    }
                    
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
        });

        res.redirect('/products/productAdmin');
    },





    //  /products/productAdmin - Vista de productAdmin
    productAdmin : (req, res, next) => {

        //Home - Encuentra todos los productos con sus imagenes y las renderiza
        db.Products.findAll({
            include: [{association: "images"}], 
            order: [
                ['id', 'DESC']
            ]
        }).then(products => {
            db.Categories.findAll({
                where: {
                    status: 1
                }
            })
                .then(categories => {
                    res.render('products/productAdmin', { productos : products, categorias: categories, userLogged : req.session.usuarioLogueado });
                })
            
            
        });
    },





    
}

module.exports = productsController;