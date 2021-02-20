let db = require('../../database/models');
const bcrypt = require('bcryptjs');

let apiBierClubController = {
  login: (req, res) => {
    db.Users.findOne({
      where: {
        email: req.body.email,
        admin: 1,
      },
    }).then((user) => {
      if (
        user != null &&
        bcrypt.compareSync(req.body.password, user.password)
      ) {
        res.json({
          meta: {
            status: 200,
          },
          data: {
            message: 'User Logueado',
          },
        });
      } else {
        res.json({
          meta: {
            status: 404,
          },
          data: {
            message: '* Error de credenciales',
          },
        });
      }
    });
  },

  // Cantidad de usuarios registrados
  getTotalRegisteredUsers: (req, res) => {
    db.Users.count()
      .then((userRegistered) => {
        res.json({
          meta: {
            status: 200,
            state: 'OK',
            url: '/api/bierclub' + req.url,
          },
          getTotalRegisteredUsers: userRegistered,
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

  // Cantidad de productos subidos
  getTotalProductsAdded: (req, res) => {
    db.Products.count()
      .then((productsAdded) => {
        res.json({
          meta: {
            status: 200,
            state: 'OK',
            url: '/api/bierclub' + req.url,
          },
          getTotalProductsAdded: productsAdded,
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

        res.json({
          meta: {
            status: 200,
            state: 'OK',
            url: '/api/bierclub' + req.url,
          },
          getTotalSalesMade: total,
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
        res.json({
          meta: {
            status: 200,
            state: 'OK',
            url: '/api/bierclub' + req.url,
          },
          data: categories,
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

        res.json({
          meta: {
            status: 200,
            state: 'OK',
            url: '/api/bierclub' + req.url,
          },
          getLastProductAdded: product,
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

            res.json({
              meta: {
                status: 200,
                state: 'OK',
                url: '/api/bierclub' + req.url,
              },
              getLastProductSold: lastProductSold,
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

  // La venta más cara
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
        product.images.forEach((image) => {
          image.name = 'http://localhost:3000/images/productos/' + image.name;
        });

        
        res.json({
          meta: {
            status: 200,
            state: 'OK',
            url: '/api/bierclub' + req.url,
          },
          getTheMostExpensiveProductSold: product,
        });

        /*
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

        res.json(respuesta); */
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
};

module.exports = apiBierClubController;
