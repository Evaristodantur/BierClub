const path = require('path');
const fs = require('fs');

//Agregado database JSON
let productsJson = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/products.json'), 'utf-8'));

let mainController = {
    
    //  Home
    index : (req, res, next) => {
        function shuffle(array) {
            var currentIndex = array.length, temporaryValue, randomIndex;
          
            // While there remain elements to shuffle...
            while (0 !== currentIndex) {
          
              // Pick a remaining element...
              randomIndex = Math.floor(Math.random() * currentIndex);
              currentIndex -= 1;
          
              // And swap it with the current element.
              temporaryValue = array[currentIndex];
              array[currentIndex] = array[randomIndex];
              array[randomIndex] = temporaryValue;
            }
          
            return array;
          }

          shuffle(productsJson)
        res.render('index', {productos : productsJson});
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

    //  /prueba/:id
    prueba : (req, res, next) => {
        let idUrl = req.params.id;

        let productoBuscado = productsJson.find(producto => producto.id == idUrl);
        
        productoBuscado ? (res.render("prueba",productoBuscado)) : res.render("error")
    },
    error : (req, res, next) => {
        res.render('error');
    }
}

module.exports = mainController;