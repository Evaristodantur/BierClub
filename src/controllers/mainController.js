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
                include: [{association: "images"}], 
                order: [
                    ['id', 'DESC']
                ]
            }).then(products => {
                db.Products.findAll({
                  include: [{ association: 'images' }],
                  where: {
                    stock: { [db.Sequelize.Op.gt]: 0 },
                  }
                }).then(productInStock => {
                    console.log(productInStock);
                    res.render('index', { productosEnStock: productInStock, productosNovedades: products, userLogged : req.session.usuarioLogueado });
                })
                            
            });
    },





    //  Home
    newsletterSuscription : (req, res, next) => {

        db.Users.findOne({
            where: {
                email: req.body.newsletter
            }
        }).then(user => {

            if(user != null) {
                let transporter = nodemailer.createTransport({
                    service: "gmail",
                    auth: {
                      user: process.env.email,
                      pass: process.env.password
                    }
                  });
        
                  const output = `
                  <h3>¡Gracias por suscribirte a BierClub-newsletters!:</h3>
                  <p>Semanalmente enviaremos emails con informacion de nuestros productos y articulos de interes.</p>
                  <p>Para darse de baja de BierClub-newsletters inicie sesión y desuscribase en el perfil.</p>
                  `;
        
                  let mailOptions = {
                    from: process.env.email, 
                    to: user.email,
                    subject: "Alta de suscripcion en BierClub-newsletters",
                    html: output
                  }
        
                  transporter.sendMail(mailOptions, function(err, data){
                    if(err){
                      console.log("ERROR");
                    }else{
                      console.log("Mensaje enviado!");
                    }
                  });

                db.Users.update({
                    newsletter_status: 1
                }, {
                    where: {
                        email: user.email
                    }
                });

                //Muestra todos los productos en el home
                db.Products.findAll({
                    include: [{association: "images"}]
                }).then(products => {
                    res.render('index', { productos : products, newsletter : 1,  userLogged : req.session.usuarioLogueado});
                });
            } else {
                //Muestra todos los productos en el home
                db.Products.findAll({
                    include: [{association: "images"}]
                }).then(products => {
                    res.render('index', { productos : products, newsletter : 0, userLogged : req.session.usuarioLogueado });
                });
            }

        })

        
    },





    //  Home
    game : (req, res, next) => {

        //Muestra todos los productos en el home
        res.render('game', {userLogged : req.session.usuarioLogueado});
    },





    //  /about-us
    aboutUs : (req, res, next) => {
        res.render('aboutUs', {userLogged : req.session.usuarioLogueado});
    },





    //  /promociones
    promociones : (req, res, next) => {
        res.render('promociones', {userLogged : req.session.usuarioLogueado});
    },





    //  /suscripcion
    suscripcion : (req, res, next) => {
        res.render('suscripcion', {userLogged : req.session.usuarioLogueado});
    },




    
    // /envios
    envios : (req,res, next) => { 
        res.render('envios', {userLogged : req.session.usuarioLogueado});
    },





    // /contacto
    contactRender : (req, res, next) => {
        res.render("contact", {userLogged : req.session.usuarioLogueado});
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
            return res.render("contact", {errors : errores, userLogged : req.session.usuarioLogueado});
        }

        //Manda el mensaje de contacto a bierclub
        let nodemailerAssets = require("../assets/nodemailerAssets");

        nodemailerAssets(req).transporter.sendMail(nodemailerAssets(req).mailOptions, function(err, data){
            if(!err){
                res.render("contact", { success : "Tu mensaje fue enviado con exito!", userLogged : req.session.usuarioLogueado })
            }
        });
    }
} 


module.exports = mainController;