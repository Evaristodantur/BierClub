const path = require('path');
const fs = require('fs');

//Agregado database JSON
let productsJson = fs.readFileSync(path.resolve(__dirname, '../database/products.json'), 'utf-8');
if(productsJson == "") {
    fs.writeFileSync(__dirname + "/../database/products.json", JSON.stringify(productsJson = []));
} else {
    productsJson = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/products.json'), 'utf-8'));
}

let mainController = {
    
    //  Home
    index : (req, res, next) => {

        function arrayDesordenado(array) {
            let elementoActual = array.length, almacenamientoTemporal, random;
          
            // Mientras queden elementos sin desordenar
            while (0 !== elementoActual) {
          
              // Agarra un elemento y lo hace random
              random = Math.floor(Math.random() * elementoActual);
              elementoActual -= 1;
          
              // lo cambia por el elemento actual
              almacenamientoTemporal = array[elementoActual];
              array[elementoActual] = array[random];
              array[random] = almacenamientoTemporal;
            }
            return array;
          }

        res.render('index', {productos : arrayDesordenado(productsJson)});
    },

    //  /about-us
    aboutUs : (req, res, next) => {
        res.render('aboutUs', {title : "hola"});
    },

    //  /promociones
    promociones : (req, res, next) => {
        res.render('promociones');
    },

    //  /suscripcion
    suscripcion : (req, res, next) => {
        res.render('suscripcion');
    },

    // ERROR
    error : (req, res, next) => {
        res.render('error');
    }
}

module.exports = mainController;