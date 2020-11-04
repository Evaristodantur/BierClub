const path = require('path');
const fs = require('fs');

//Agregado database JSON
let productsJson = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/products.json'), 'utf-8'));

let mainController = {
    
    //  Home
    index : (req, res, next) => {
        res.render('index');
    },

    //  /about-us
    aboutUs : (req, res, next) => {
        res.render('aboutUs');
    },

    //  /promociones
    promociones : (req, res, next) => {
        res.render('promociones');
    },

    //  /suscripcion
    suscripcion : (req, res, next) => {
        res.render('suscripcion');
    },

    //  /prueba/:id
    prueba : (req, res, next) => {
        let idUrl = req.params.id;
        if (idUrl > productsJson.length) { return (res.render('error')); }

        let productoBuscado = productsJson.find(producto => producto.id == idUrl);

        console.log(productoBuscado);

        res.render('prueba', productoBuscado);
        
        productoBuscado ? (res.render("prueba",productoBuscado)) : res.render("error")
    }
}

module.exports = mainController;