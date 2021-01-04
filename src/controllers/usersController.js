const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const {validationResult} = require("express-validator");
const nodemailer = require("nodemailer");
require("dotenv").config();
let db = require("../database/models");
let sequelize = db.sequelize;

//Agregado database JSON

let usuariosJson = fs.readFileSync(path.resolve(__dirname, '../database/usuarios.json'), 'utf-8');
let dbDirectory = path.resolve(__dirname, '../database/usuarios.json')

usuariosJson == "" ?
    fs.writeFileSync(dbDirectory, JSON.stringify(usuariosJson = [])) :
    usuariosJson = JSON.parse(fs.readFileSync(dbDirectory), 'utf-8');

    
let usersController = {


    //    /users/usersAdmin
    usersAdminList : (req, res, next) => {
      db.Users.findAll()
        .then(users => {
          res.render('users/usersAdmin', { usuarios : users });
        })
      
    },

    //    /users/usersAdminEdit/:id  (POST)
    usersAdminEditView : (req, res, next) => {
      // Busca el id por parametro 
      let idUrl = req.params.id;

      db.Users.findByPk(idUrl)
        .then(user => {
          console.log(user);
          if(user != null) {
            res.render("users/usersAdminEdit", { usuarios : user })
          } else {
            res.render('users/verifyAccount', { msgErrorUsuarioInexistente: 'Este usuario no existe'})
          }          
        })

      /* // Busca el id del usuario enviado por parametro
      let usuarioBuscado = usuariosJson.find( usuario => usuario.id == idUrl );

      // Si el id del usuario enviado por parametro existe, envia la vista. Si no existe, da error.
      usuarioBuscado ? (res.render("users/usersAdminEdit", { usuarios : usuarioBuscado })) : res.render('users/verifyAccount', { msgErrorUsuarioInexistente: 'Este usuario no existe'}); */
    },

    //    /users/usersAdminEdit/:id  (POST)
    usersAdminEdit : (req,res,next) =>{
      // Busca el id por parametro 
      let idUrl = req.params.id;


      // Crea variable admin
      let admin;

      // Verifica si el user a editar es admin y le aplica la propiedad a esa variable
      req.body.admin ?  admin = true : admin = false;

      // Mapeo del usuario con los cambios
       let usuarioCambiado = usuariosJson.map(function(usuario){
        if(usuario.id == idUrl){
           usuario = {
            id : parseInt(idUrl),
            nombre : req.body.nombre,
            email : req.body.email,
            contrasenia : req.body.contrasenia,
            admin : admin,
            verify : usuario.verify
          }
        }
        return usuario;
      });

      // Usuario agregado al JSON
      let usuariosCambiadosJSON = JSON.stringify(usuarioCambiado);
      fs.writeFileSync(dbDirectory, usuariosCambiadosJSON);
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
      if (!errores.isEmpty()){
        return res.render("users/register", {errors : errores})
      }

      let codigoDeVerificacion = (Math.random()*15).toString(36).substring(2);
      db.Users.create({
        name: req.body.nombre,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.contrasenia,10),
        suscription_status: 0,
        admin: 0,
        verify: 0,
        verify_code: codigoDeVerificacion
      });

      
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


      //res.render("users/register", { verificarUsuario : "¡Te registraste! Por favor verifica tu dirección email."});

       
/*
      // Crea variable del ID maximo para reemplazarlo luego.
      let idMax = 0;

      // For para buscar el ID mas alto, y reemplazar idMax por el ID mas alto
      for(let i = 0 ; i < usuariosJson.length ; i++){
        if(usuariosJson[i].id > idMax){
          idMax = usuariosJson[i].id;
        }
      }
      
      // Sumarle 1 al ID mas alto, para crear un usuario nuevo con un ID unico
      idMax = idMax + 1;

      // Hacer objeto completo, con el ID primero para mas comodidad
      let usuarioNuevo = {
        id : idMax,
        nombre : req.body.nombre,
        email : req.body.email,
        contrasenia : bcrypt.hashSync(req.body.contrasenia,10),
        admin : false,
        verify: [false, (Math.random()*15).toString(36).substring(2)]
      } 

      // Manda mail de verificacion
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.email,
          pass: process.env.password
        }
      });

      const output = `
      <h3>¡Gracias por registrarte en BierClub!:</h3> 
      <p>Por favor haz click en <a href="http://localhost:3000/users/verifyAccount/${usuarioNuevo.verify[1]}">este</a> link para activar tu cuenta</p>
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

      

      // Sumar el usuario al array
      usuariosJson.push(usuarioNuevo);
      
      // Sobreescribe el archivo
      fs.writeFileSync(dbDirectory, JSON.stringify(usuariosJson));

      // Te envia a la vista una vez el form fue completado
      
      res.render("users/register", { verificarUsuario : "¡Te registraste! Por favor verifica tu dirección email."});
        }
      }) */
    },




    //  /users/login
    loginRender : (req, res, next) => {
      res.render('users/login');
    },

    //  /users/login (POST)
    loginIniciar : (req, res, next) => {

      let errores = validationResult(req);
      errores.reqEmail = req.body.email;

      if (!errores.isEmpty()){
        return res.render("users/login", {errors : errores})
      }

      db.Users.findOne({
        where: {
          email: req.body.email
        }
      }).then((user) => {
        if(user != null && bcrypt.compareSync(req.body.contrasenia, user.password)) {
          req.session.usuarioLogueado = user;

        if(req.body.recordameLogin != undefined){
          res.cookie('recordame', user.email,{ maxAge: 1000*60*60*24*365*3 })
        }

        res.redirect('back');

        } else {
          let password_Email = "El usuario/contraseña son incorrectos"
          return res.render("users/login", {password_Email : password_Email});
        }

      })


     /*  // Enviar errores express-validator
      let errores = validationResult(req);
      errores.reqEmail = req.body.email;
      if (!errores.isEmpty()){
        return res.render("users/login", {errors : errores})
      }
      // Busca el email ingresado en el json
      let buscarUsuario = usuariosJson.find(usuario => usuario.email == req.body.email);

      // Hace la session del usuario buscado (Si o si lo encuentra, porque si no existe, el middleware tira error. Por eso no hace falta un if)
      req.session.usuarioLogueado = buscarUsuario;

      // Si el "Recordarme" esta marcado, crea la cookie para mantener la sesion iniciada
      if(req.body.recordameLogin != undefined){
        res.cookie('recordame', buscarUsuario.email,{ maxAge: 1000*60*60*24*365*3 })
      }

      res.redirect('back'); */
    },


    //  /users/perfil/:id (PAGINA VISUAL)
    perfilEdit : (req, res, next) => {

      let idUrl = req.params.id;

      
      db.Users.findByPk(idUrl)
        .then((user) => {
          if(user != null) {
            user.errors = undefined;
            res.render("users/perfil", { usuario : user })
          } else {
            res.render("error")
          }
        })
      

       /* let idUrl = req.params.id;

        let usuarioBuscado = usuariosJson.find( usuario => usuario.id == idUrl );

        // Esto es para arreglar error de recargar la pagina
        usuarioBuscado.errors = undefined;
        
        usuarioBuscado ? (res.render("users/perfil", { usuario : usuarioBuscado })) : res.render("error")  */
    },


    //  /users/perfil/:id (POST)
    perfilUpdate : (req, res, next) => {
      // Busca la URL del parametro
      let idUrl = req.params.id;

      // Hay errores? Esta es la logica de los errores. (check en los middlewares)
      let errores = validationResult(req);
      let usuarioBuscado = usuariosJson.find( usuario => usuario.id == idUrl );
      if (!errores.isEmpty()){
        usuarioBuscado.errors = errores.errors;
        return res.render("users/perfil", { usuario : usuarioBuscado })
      }

      // Cambios en el usuario si no hay ningun error
      let usuarioCambiado = usuariosJson.map(function(usuario){
        if(usuario.id == idUrl){
           usuario = {
            id : parseInt(idUrl),
            nombre : req.body.nombre,
            email : req.body.email,
            contrasenia : bcrypt.hashSync(req.body.contrasenia,10),
            admin : usuarioBuscado.admin,
            verify : usuarioBuscado.verify
          }
        }
        return usuario;
    });

      // Usuario agregado al JSON
      let usuariosCambiadosJSON = JSON.stringify(usuarioCambiado);
      fs.writeFileSync(dbDirectory, usuariosCambiadosJSON);
      res.redirect("/");
      },

      // users/perfil/eliminar/:id (POST)
    eliminar : (req, res, next) => {

        // Busca el id enviado por parametro
        let idUrl = req.params.id;

        db.Users.destroy({
          where: {
            id: idUrl
          }
        })

        res.redirect("/users/usersAdmin");
        /* // Hace un filter para eliminar al usuario directamente
        let eliminarUsuario = usuariosJson.filter(function(usuario){
          return usuario.id != idUrl;
        });

        // Incluye la lista actualizada al JSON
        let usuarioEliminadoJSON = JSON.stringify(eliminarUsuario);
        fs.writeFileSync(dbDirectory, usuarioEliminadoJSON); */
        
    },

      // users/perfil/pedidos/:id
    pedidos : (req, res, next) => {
        // Guarda el ID del parametro
        let idUrl = req.params.id;

        db.Users.findByPk(idUrl)
          .then(user => {
            if(user != null) {
              res.render("users/pedidos", user)
            } else {
              res.render("error")
            }
          })

        /* let usuarioBuscado = usuariosJson.find( usuario => usuario.id == idUrl );
        
        usuarioBuscado ? (res.render("users/pedidos", usuarioBuscado)) : res.render("error") */
    },

      // users/verifyAccount/:id 
    verifyAccount: (req, res, next) => {

        // Guarda el ID del parametro
        let codeUrl = req.params.id;
        console.log(codeUrl);

        db.Users.findOne({
          where: {
            verify_code: codeUrl
          }
        })
          .then((user) => {
            console.log(user);
            if (user == null) {
              return res.render('users/verifyAccount', { msgError: 'La cuenta que quieres verificar no existe'});
            }
            console.log(user.verify);
            if (user.verify == 1) {
              return res.render('users/verifyAccount', { msgErrorYaVerificado: 'Este email ya ha sido verificado'} )
            }

            console.log(`UPDATE users SET verify = '1' WHERE users.id = ${user.id}`);
            db.sequelize.query(`UPDATE users SET verify = '1' WHERE users.id = ${user.id}`);
            return res.render('users/verifyAccount', { usuario : user });
          });

        /* // Busca el usuario con el ID pasado por parametro
        let usuarioAVerificar = usuariosJson.find( usuario => usuario.verify[1] == idUrl );

        //Verificacion de email inexistente
        if (usuarioAVerificar == undefined) {
          return res.render('users/verifyAccount', { msgError: 'La cuenta que quieres verificar no existe'});
        }

        //Verificacion de email ya registrado
        if (usuarioAVerificar.verify[0] == true) {
          return res.render('users/verifyAccount', { msgErrorYaVerificado: 'Este email ya ha sido verificado'} )
        }

        usuarioAVerificar.verify[0] = true;

        //Agrego el email al array
        let usuariosAVerificar = usuariosJson.map(function(usuario){
          if(usuario.id == usuarioAVerificar.id){
            usuario = usuarioAVerificar;
          }
          return usuario;
        });
  
        //Lo guardo en el JSON
        let usuariosCambiadosJSON = JSON.stringify(usuariosAVerificar);
        fs.writeFileSync(dbDirectory, usuariosCambiadosJSON);

        return res.render('users/verifyAccount', { usuario : usuarioAVerificar }); */

    },

      // users/verifyAccount/:id (POST)
    reenviarEmail: (req, res, next) =>{

      // Guardo el ID pasado por parametro
      let idUrl = req.params.id;

      db.Users.findByPk(idUrl)
        .then((user) => {
          console.log(user.verify_code);
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
          res.render('users/verifyAccount', { msgErrorReenviado : "El codigo de verificación ha sido reenviado a tu dirección de correo electronico." })
        })



/* 
        // Guardo el ID pasado por parametro
        let idUrl = req.params.id;

        // Busca el ID pasado por parametro en el json
        let usuarioBuscado = usuariosJson.find( usuario => usuario.id == idUrl );

        // Reenvia el email
        let transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.email,
            pass: process.env.password
          }
        });
        const output = `
        <h3>¡Gracias por registrarte en BierClub!:</h3> 
        <p>Por favor haz click en <a href="http://localhost:3000/users/verifyAccount/${usuarioBuscado.verify[1]}">este</a> link para activar tu cuenta</p>
        `;
        let mailOptions = {
          from: process.env.email, 
          to: usuarioBuscado.email,
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
        res.render('users/verifyAccount', { msgErrorReenviado : "El codigo de verificación ha sido reenviado a tu dirección de correo electronico." }) */
    }
}

module.exports = usersController;