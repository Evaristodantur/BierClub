const path = require('path');
const fs = require('fs');
const {validationResult} = require("express-validator");
const nodemailer = require("nodemailer");
require("dotenv").config();
let db = require("../database/models");
let sequelize = db.sequelize;

//Agregado database JSON
let productsJson = fs.readFileSync(path.resolve(__dirname, '../database/products.json'), 'utf-8');
let dbDirectory = path.resolve(__dirname, '../database/products.json');

productsJson == "" ?
    fs.writeFileSync(dbDirectory, JSON.stringify(productsJson = [])) :
    productsJson = JSON.parse(fs.readFileSync(dbDirectory, 'utf-8'));

    
let mainController = {
    
    //  Home
    index : (req, res, next) => {

        db.Products.findAll({
            include: [{association: "images"}]
        }).then(function(products){
            res.render('index', { productos : products });
        })

        /* function arrayDesordenado(array) {
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
          } */

        //res.render('index', {productos : arrayDesordenado(productsJson)});
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
    },
    //ENVIOS
    
    envios : (req,res, next) => { 
        res.render('envios');
    },



    //Contacto
    contactoRender : (req, res, next) => {
        res.render("contacto")
      },

    contactoSend : (req, res, next) => {
    // Enviar errores express-validator
    let errores = validationResult(req);
    errores.reqNombre = req.body.nombre;
    errores.reqEmail = req.body.email;
    errores.reqSubject = req.body.subject;
    errores.reqMessage = req.body.message;
    if (!errores.isEmpty()){
        return res.render("contacto", {errors : errores})
    }

    let nodemailerAssets = require("../assets/nodemailerAssets");

    nodemailerAssets(req).transporter.sendMail(nodemailerAssets(req).mailOptions, function(err, data){
        if(!err){
        res.render("contacto", { success : "Tu mensaje fue enviado con exito!" })
        }
    })
    }
} 


module.exports = mainController;