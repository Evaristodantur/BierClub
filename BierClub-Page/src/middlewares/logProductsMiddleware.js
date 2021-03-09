// Log de productos

const fs = require("fs");
let { validationResult } = require("express-validator");

function logProductsMiddleware(req, res, next) {
  let errores = validationResult(req);

  //Si hubo errores
  if (!errores.isEmpty()) {
    next();

    return fs.appendFileSync(
      "./logs/logProducts.txt",
      `Hubo un intento de subir/modificar a las ${new Date().toLocaleString()}
El producto es:
Producto: ${req.body.nombre}
Precio: ${req.body.precio}
Descuento: ${req.body.descuento}
Stock: ${req.body.stock}
Categoria: ${req.body.categoria}
Descripción: ${req.body.descripcion}
*************************************************************
`
    );
  }

  //El producto fue creado exitosamente
  fs.appendFileSync(
    "./logs/logProducts.txt",
    `Fecha de creacion/modificación del producto: ${new Date().toLocaleString()}
Producto: ${req.body.nombre}
Precio: ${req.body.precio}
Descuento: ${req.body.descuento}
Stock: ${req.body.stock}
Categoria: ${req.body.categoria}
Descripción: ${req.body.descripcion}
*************************************************************
`
  );

  next();
}

module.exports = logProductsMiddleware;
