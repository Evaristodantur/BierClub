let db = require('../../database/models');

let apiBierClubController = {
  // Cantidad de usuarios registrados
  getTotalRegisteredUsers: (req, res) => {
    db.Users.count()
      .then((userRegistered) => {
        let respuesta = {
          meta: {
            status: 200,
            state: 'OK',
            url: '/api/bierclub' + req.url,
          },
          data: {
            cantidadDeUsuariosRegistrados: userRegistered,
          },
        };

        res.json(respuesta);
      })
      .catch((err) => {
        res.json({
          meta: {
            status: 500,
            state: err,
            url: '/api/bierclub' + req.url,
          },
        });
      });
  },

  // Cantidad de productos subidos
  getTotalProductsAdded: (req, res) => {
    db.Products.count()
      .then((productsAdded) => {
        let respuesta = {
          meta: {
            status: 200,
            state: 'OK',
            url: '/api/bierclub' + req.url,
          },
          data: {
            cantidadDeProductosSubidos: productsAdded,
          },
        };

        res.json(respuesta);
      })
      .catch((err) => {
        res.json({
          meta: {
            status: 500,
            state: err,
            url: '/api/bierclub' + req.url,
          },
        });
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
    })
      .then((cartsClosed) => {
        let total = 0;
        for (let i = 0; i < cartsClosed.length; i++) {
          total += cartsClosed[i].stock_order;
        }

        let respuesta = {
          meta: {
            status: 200,
            state: 'OK',
            url: '/api/bierclub' + req.url,
          },
          data: {
            cantidadDeVentasRealizadas: total,
          },
        };

        res.json(respuesta);
      })
      .catch((err) => {
        res.json({
          meta: {
            status: 500,
            state: err,
            url: '/api/bierclub' + req.url,
          },
        });
      });
  },

  // Ultimo producto subido
  getLastProductAdded: (req, res) => {
    db.Products.findOne({
      include: {
        association: 'images',
      },
      order: [['createdAt', 'DESC']],
    })
      .then((product) => {

        product.images.forEach((image) => {
          image.name = 'http://localhost:3000/images/productos/' + image.name;
        });
        

        let respuesta = {
          meta: {
            status: 200,
            state: 'OK',
            url: '/api/bierclub' + req.url,
          },
          data: {
            ultimoProductoSubido: product,
          },
        };

        res.json(respuesta);
      })
      .catch((err) => {
        res.json({
          meta: {
            status: 500,
            state: err,
            url: '/api/bierclub' + req.url,
          },
        });
      });
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
      order: [['createdAt', 'DESC']],
    })
      .then((product) => {
        db.Products.findOne({
          include: {
            association: 'images',
          },
          where: {
            id: product.product_id,
          },
        })
          .then((lastProductSold) => {


            lastProductSold.images.forEach((image) => {
              image.name =
                'http://localhost:3000/images/productos/' + image.name;
            });


            let respuesta = {
              meta: {
                status: 200,
                state: 'OK',
                url: '/api/bierclub' + req.url,
              },
              data: {
                ultimoProductoVendido: lastProductSold,
              },
            };

            res.json(respuesta);
          })
          .catch((err) => {
            res.json({
              meta: {
                status: 500,
                state: err,
                url: '/api/bierclub' + req.url,
              },
            });
          });
      })
      .catch((err) => {
        res.json({
          meta: {
            status: 500,
            state: err,
            url: '/api/bierclub' + req.url,
          },
        });
      });
  },

  // Lista de categorias/talles/colores
  getCategoryList: (req, res) => {
    db.Categories.findAll({
      where: {
        status: 1,
      },
    })
      .then((categories) => {
        let respuesta = {
          meta: {
            status: 200,
            state: 'OK',
            url: '/api/bierclub' + req.url,
          },
          data: {
            listaDeCategorias: categories,
          },
        };

        res.json(respuesta);
      })
      .catch((err) => {
        res.json({
          meta: {
            status: 500,
            state: err,
            url: '/api/bierclub' + req.url,
          },
        });
      });
  },

  // Listado de usuarios registrados
  getRegisteredUsers: (req, res) => {
    db.Users.findAll()
      .then((users) => {
        let respuesta = {
          meta: {
            status: 200,
            state: 'OK',
            url: '/api/bierclub' + req.url,
          },
          data: {
            listaDeUsuariosRegistrados: users,
          },
        };

        res.json(respuesta);
      })
      .catch((err) => {
        res.json({
          meta: {
            status: 500,
            state: err,
            url: '/api/bierclub' + req.url,
          },
        });
      });
  },

  // La venta más cara - incluye todo un carrito
  getTheMostExpensiveProductSold: (req, res) => {
    db.Products.findOne({
      include: [
        { association: 'carts', where: { status: 1 } },
        { association: 'images' },
      ],
      order: [['price', 'DESC']],
    })
      .then((product) => {

        //Le agrega URL a la Imagen
        product.images.forEach(image => {
          image.name = 'http://localhost:3000/images/productos/' + image.name;
        });

        let respuesta = {
          meta: {
            status: 200,
            state: 'OK',
            url: '/api/bierclub' + req.url,
          },
          data: {
            productMasCaroVendido: {
              id: product.id,
              name: product.name,
              price: product.price,
              stock: product.stock,
              description: product.description,
              createdAt: product.createdAt,
              updatedAt: product.updatedAt,
              category_id: product.category_id,
              images: product.images,
            },
          },
        };

        res.json(respuesta);
      })
      .catch((err) => {
        res.json({
          meta: {
            status: 500,
            state: err,
            url: '/api/bierclub' + req.url,
          },
        });
      });
  },
};

module.exports = apiBierClubController;
