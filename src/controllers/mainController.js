const path = require('path');
const fs = require('fs');
const {validationResult} = require("express-validator");
const nodemailer = require("nodemailer");
require("dotenv").config();
let db = require("../database/models");
let sequelize = db.sequelize;

    
let mainController = {
    

    //  Home
    index : (req, res, next) => {

        //Muestra todos los productos en el home
        db.Products.findAll({
                include: [{association: "images"}]
            }).then(products => {
                res.render('index', { productos : products });
            });
    },





    //  Home
    game : (req, res, next) => {

        //Muestra todos los productos en el home
        res.render('game');
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





    // Pagina de error
    error : (req, res, next) => {
        res.render('error');
    },




    
    // /envios
    envios : (req,res, next) => { 
        res.render('envios');
    },





    // /contacto
    contactRender : (req, res, next) => {
        res.render("contact");
    },




    // Post de Contacto
    contactSend : (req, res, next) => {

        // Enviar errores express-validator
        let errores = validationResult(req);

        errores.reqNombre = req.body.nombre;
        errores.reqEmail = req.body.email;
        errores.reqSubject = req.body.subject;
        errores.reqMessage = req.body.message;

        //Verifica si hay errores
        if (!errores.isEmpty()){
            return res.render("contact", {errors : errores});
        }

        //Manda el mensaje de contacto a bierclub
        let nodemailerAssets = require("../assets/nodemailerAssets");

        nodemailerAssets(req).transporter.sendMail(nodemailerAssets(req).mailOptions, function(err, data){
            if(!err){
                res.render("contact", { success : "Tu mensaje fue enviado con exito!" })
            }
        });
    }
} 


module.exports = mainController;