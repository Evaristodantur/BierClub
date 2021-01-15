const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const {validationResult} = require("express-validator");
const nodemailer = require("nodemailer");
require("dotenv").config();
let db = require("../database/models");
let sequelize = db.sequelize;
    
let usersController = {




    //    /users/usersAdmin
    usersAdminList : (req, res, next) => {

      //Busca todos los usuarios y los renderiza en la vista
      db.Users.findAll()
        .then(users => {
          res.render('users/usersAdmin', { usuarios : users });
        });
    },





    //    /users/usersAdminEdit/:id  (POST)
    usersAdminEditView : (req, res, next) => {
      // Busca el id por parametro 
      let idUrl = req.params.id;

      //Busca el usuario en especifico y se fija si existe o no
      db.Users.findByPk(idUrl)
        .then(user => {
          if(user != null) {
            res.render("users/usersAdminEdit", { usuarios : user });
          } else {
            res.render('users/verifyAccount', { msgErrorUsuarioInexistente: 'Este usuario no existe'});
          }          
        });
    },





    //    /users/usersAdminEdit/:id  (POST)
    usersAdminEdit : (req,res,next) =>{
      // Busca el id por parametro 
      let idUrl = req.params.id;


      let adminStatus;

      //Cambia el estado de "admin" del usuario
      if(req.body.admin == 'on') {
        adminStatus = 1;
      } else {
        adminStatus = 0;
      }

      //Actualiza el usuario
      db.Users.update({
        name: req.body.nombre,
        email: req.body.email,
        admin: adminStatus  
      },{
        where: {
          id: idUrl
        }
      });

      res.redirect("/users/usersAdmin");
      
    },


    


    //  /users/register
    create : (req, res, next) => {
      res.render('users/register');
    },





    //  /users/register (POST)
    store : (req, res, next) => {

      // Enviar errores express-validator
      let errores = validationResult(req);
      errores.reqNombre = req.body.nombre;
      errores.reqEmail = req.body.email;

      //Verifica los errores y los renderiza
      if (!errores.isEmpty()){
        return res.render("users/register", {errors : errores});
      }

      //Codifco de "verify_code"
      let codigoDeVerificacion = (Math.random()*15).toString(36).substring(2);

      //Crea el usuario en la base de datos
      db.Users.create({
        name: req.body.nombre,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.contrasenia,10),
        suscription_status: 0,
        newsletter_status: 0,
        admin: 0,
        verify: 0,
        verify_code: codigoDeVerificacion
      });


      //Manda un mail al usuario
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.email,
          pass: process.env.password
        }
      });

      const output = `
      <h3>¡Gracias por registrarte en BierClub!:</h3> 
      <p>Por favor haz click en <a href="http://localhost:3000/users/verifyAccount/${codigoDeVerificacion}">este</a> link para activar tu cuenta</p>
      `;

      let mailOptions = {
        from: process.env.email, 
        to: req.body.email,
        subject: "Verificacion de la cuenta de BierClub",
        html: output
      }

      transporter.sendMail(mailOptions, function(err, data){
        if(err){
          console.log("ERROR");
        }else{
          console.log("Mensaje enviado!");

          // Te envia a la vista una vez el form fue completado
          res.render("users/register", { verificarUsuario : "¡Te registraste! Por favor verifica tu dirección email."});
        }
      });

    },





    //  /users/login
    loginRender : (req, res, next) => {
      res.render('users/login');
    },





    //  /users/login (POST)
    loginIniciar : (req, res, next) => {

      //Toma los errores
      let errores = validationResult(req);
      errores.reqEmail = req.body.email;

      //Renderiza la vista con los errores
      if (!errores.isEmpty()){
        return res.render("users/login", {errors : errores});
      }

      //Busca el usuario a iniciar
      db.Users.findOne({
        where: {
          email: req.body.email
        }
      }).then((user) => {
        //Se fija si el usuario existe y la contraseña es valida
        if(user != null && bcrypt.compareSync(req.body.contrasenia, user.password)) {
          req.session.usuarioLogueado = user;

        //Activa la cookie si el usuario tildo "recordarme"
        if(req.body.recordameLogin != undefined){
          res.cookie('recordame', user.email,{ maxAge: 1000*60*60*24*365*3 });
        }

          //Busca si el usuario logeado tiene un carrito
          db.Carts.findOne({
            where: {
                user_id: user.id,
                status: 0
            }
          }).then(cart => {
            //Si el usuario no tiene carrito lo crea
            if(cart == null) {      
              db.Carts.create({
                  user_id: user.id,
                  status: 0
              });
            }

            res.redirect('back');
          });

    

        } else {

          //Renderiza la vista de inicio de session con el error de contraseña o mail incorrectos
          let credencialesInvalidas = "El usuario/contraseña son incorrectos";
          return res.render("users/login", {credencialesInvalidas : credencialesInvalidas});
        }

      });
    },





    //  /users/perfil/:id (PAGINA VISUAL)
    perfilEdit : (req, res, next) => {

      let idUrl = req.params.id;

      //Entra al perfil del usuario
      db.Users.findByPk(idUrl)
        .then((user) => {
          if(user != null) {
            user.errors = undefined;
            res.render("users/perfil", { usuario : user });
          } else {
            res.render("error");
          }
        });
    },





    //  /users/perfil/:id (POST)
    perfilUpdate : (req, res, next) => {
      // Busca la URL del parametro
      let idUrl = req.params.id;

      //Toma los errores
      let errores = validationResult(req);

      //Busca el usuario
      db.Users.findByPk(idUrl)
        .then(user => {

          //Comparacion de la contraseña antigua con la puesta en el formulario
          if(!bcrypt.compareSync(req.body.antiguaContrasenia, user.password)){
            errores.errors.push({
              msg: 'La antigua contraseña no coincide',
              param: 'antiguaContrasenia'
            });
          }

          //Validacion de que el mail fue cambiado
          if(req.body.email != user.email) {
            db.Users.findOne({
              where: {
                email: req.body.email
              }
            }).then(userMailYaRegistrado => {

              //Validacion de que el email no exista en la base de datos
              if(userMailYaRegistrado) {
                errores.errors.push({
                  msg: 'El email actual ya esta registrado',
                  param: 'email'
                });
              }

              //Se fija si hay errores
              if (!errores.isEmpty()){
            
                user.errors = errores.errors;
                
                return res.render("users/perfil", { usuario : user });
              } else {
  
                //Actualiza el usuario
                db.Users.update({
                  name: req.body.nombre,
                  email: req.body.email,
                  password: bcrypt.hashSync(req.body.contrasenia,10)
                },{
                  where: {
                    id: idUrl
                  }
                });
        
                res.redirect("/");
              }

            });


          } else {

            //En esta condicion el mail no fue cambiado
            //Se fija si no hay errores
            if (!errores.isEmpty()){
            
              user.errors = errores.errors;
              
              return res.render("users/perfil", { usuario : user });
            } else {

              //Actualiza el perfil den usuario
              db.Users.update({
                name: req.body.nombre,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.contrasenia,10)
              },{
                where: {
                  id: idUrl
                }
              });
      
              res.redirect("/");
            }
          }

        });
      },





    // users/perfil/eliminar/:id (POST)
    eliminar : (req, res, next) => {

        // Busca el id enviado por parametro
        let idUrl = req.params.id;

        //Lo borra de la base de datos
        db.Users.destroy({
          where: {
            id: idUrl
          }
        });

        res.redirect("/users/usersAdmin");        
    },





    // users/perfil/pedidos/:id
    pedidos : (req, res, next) => {
        // Guarda el ID del parametro
        let idUrl = req.params.id;

        //Renderiza la vista con los pedidos del usuario
        db.Users.findByPk(idUrl)
          .then(user => {

            if(user != null) {
              res.render("users/pedidos", user);
            } else {
              res.render("error");
            }

          });

    },




    // users/verifyAccount/:id 
    verifyAccount: (req, res, next) => {

        // Guarda el ID del parametro
        let codeUrl = req.params.id;

        //Busca el usuario con el codigo de verificacion
        db.Users.findOne({
          where: {
            verify_code: codeUrl
          }
        }).then((user) => {

            //Renderiza la vista "la cuenta no existe"
            if (user == null) {
              return res.render('users/verifyAccount', { msgError: 'La cuenta que quieres verificar no existe'});
            }
            
            //Renderiza la vista "la cuenta ya fue verificada"
            if (user.verify == 1) {
              return res.render('users/verifyAccount', { msgErrorYaVerificado: 'Este email ya ha sido verificado'} );
            }

            //Renderiza la vista con la cuenta ya verificada
            db.sequelize.query(`UPDATE users SET verify = '1' WHERE users.id = ${user.id}`);
            return res.render('users/verifyAccount', { usuario : user });

          });
    },





    // users/verifyAccount/:id (POST)
    reenviarEmail: (req, res, next) =>{

      // Guardo el ID pasado por parametro
      let idUrl = req.params.id;

      //Busca el usuario para reenviar el email
      db.Users.findByPk(idUrl)
        .then((user) => {

          let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: process.env.email,
              pass: process.env.password
            }
          });

          const output = `
          <h3>¡Gracias por registrarte en BierClub!:</h3> 
          <p>Por favor haz click en <a href="http://localhost:3000/users/verifyAccount/${user.verify_code}">este</a> link para activar tu cuenta</p>
          `;

          let mailOptions = {
            from: process.env.email, 
            to: user.email,
            subject: "Verificacion de la cuenta de BierClub",
            html: output
          }

          transporter.sendMail(mailOptions, function(err, data){
            if(err){
              console.log("ERROR");
            }else{
              console.log("Mensaje enviado!");
            }
          });

          res.render('users/verifyAccount', { msgErrorReenviado : "El codigo de verificación ha sido reenviado a tu dirección de correo electronico." });
          
        });

    }
}

module.exports = usersController;