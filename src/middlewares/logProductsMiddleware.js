const fs = require('fs');

function logProductsMiddleware (req, res, next) {
    fs.appendFileSync('./logs/logProducts.txt', `Se creó-modificó el producto "${req.body.nombre}" -- ` + (new Date().toLocaleString()) + '\n');

    next();
}

module.exports = logProductsMiddleware;