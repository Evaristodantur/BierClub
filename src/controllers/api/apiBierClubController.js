let db = require('../../database/models');

let apiBierClubController = {

    // Cantidad de usuarios registrados
    getTotalRegisteredUsers: (req, res) => {
        db.Users.count()
            .then(userRegistered => {

                let respuesta = {
                  meta: {
                    status: 200,
                    url: 'api/bierclub/getTotalRegisteredUsers',
                  },
                  data: userRegistered,
                };

                res.json(respuesta);
            });
    },

    // Cantidad de productos subidos
    getTotalProductsAdded: (req, res) => {
        db.Products.count().then((productsAdded) => {

          let respuesta = {
            meta: {
              status: 200,
              url: 'api/bierclub/getTotalProductsAdded',
            },
            data: productsAdded,
          };

          res.json(respuesta);
        });
    },

    // Cantidad de ventas realizadas
    getTotalSalesMade: (req, res) => {
        db.Cart_Product.findAll({
          include: [
            {
              association: 'carts',
              where: { status: 1 },
            },
          ],
        }).then((cartsClosed) => {

            let total = 0;
            for(let i=0; i < cartsClosed.length; i++) {
                total += cartsClosed[i].stock_order;
            }

            let respuesta = {
              meta: {
                status: 200,
                url: 'api/bierclub/getTotalSalesMade',
              },
              data: total,
            };

            res.json(respuesta);
            
        });
    },

    // Ultimo producto subido
    getLastProductAdded: (req, res) => {
        db.Products.findOne({
            order: [
                    ['createdAt', 'DESC']
                ]
        }).then(product => {

                let respuesta = {
                  meta: {
                    status: 200,
                    url: 'api/bierclub/getLastProductAdded',
                  },
                  data: product,
                };

                res.json(respuesta);
            })
    },

    // Ultimo producto vendido
    getLastProductSold: (req, res) => {
        db.Cart_Product.findOne({
            include: [
            {
              association: 'carts',
              where: { status: 1 },
            },
          ],
            order: [
                    ['createdAt', 'DESC']
                ]
        }).then(product => {
                
                db.Products.findOne({
                    where: {
                        id: product.product_id
                    }
                }).then(lastProductSold => {

                    let respuesta = {
                      meta: {
                        status: 200,
                        url: 'api/bierclub/getLastProductSold',
                      },
                      data: lastProductSold,
                    };

                    res.json(respuesta);
                });                
                
            })
    },

    // Lista de categorias/talles/colores
    getCategoryList: (req, res) => {
        db.Categories.findAll({
            where: {
                status: 1
            }
        })
            .then(categories => {

                let respuesta = {
                  meta: {
                    status: 200,
                    url: 'api/bierclub/getCategoryList',
                  },
                  data: categories,
                };

                res.json(respuesta);

            })
    },

    // Listado de usuarios registrados
    getRegisteredUsers: (req, res) => {
        db.Users.findAll()
            .then(users => {

                let respuesta = {
                  meta: {
                    status: 200,
                    url: 'api/bierclub/getRegisteredUsers',
                  },
                  data: users,
                };

                res.json(respuesta);

            })
    },

    // La venta más cara
    getTheMostExpensiveProductSold: (req, res) => {

        
        db.Products.findOne({
            include: [{association: "carts", where: {status: 1} }],
            order: [
                ['price', 'DESC']
            ]
        })
            .then(product => {

                let respuesta = {
                  meta: {
                    status: 200,
                    url: 'api/bierclub/getTheMostExpensiveProductSold',
                  },
                  data: product,
                };

                res.json(respuesta);

            })
    }
}

module.exports = apiBierClubController;