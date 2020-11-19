const fs = require('fs');

function logProductsMiddleware (req, res, next) {
    fs.appendFileSync('./logs/logProducts.txt', `Se creo-modifico el producto "${req.body.nombre}"` + '\n');

    next();
}

module.exports = logProductsMiddleware;