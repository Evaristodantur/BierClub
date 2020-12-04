const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const {validationResult} = require("express-validator");
const nodemailer = require("nodemailer");
require("dotenv").config();

//Agregado database JSON

let usuariosJson = fs.readFileSync(path.resolve(__dirname, '../database/usuarios.json'), 'utf-8');
let dbDirectory = path.resolve(__dirname, '../database/usuarios.json')

usuariosJson == "" ?
    fs.writeFileSync(dbDirectory, JSON.stringify(usuariosJson = [])) :
    usuariosJson = JSON.parse(fs.readFileSync(dbDirectory), 'utf-8');

    
let usersController = {


    //    /users/usersAdmin
    usersAdminList : (req, res, next) => {
      res.render('users/usersAdmin', { usuarios : usuariosJson });
    },

    usersAdminEditView : (req, res, next) => {
      let idUrl = req.params.id;

      let usuarioBuscado = usuariosJson.find( usuario => usuario.id == idUrl );
      usuarioBuscado ? (res.render("users/usersAdminEdit", { usuarios : usuarioBuscado })) : res.render('users/verifyAccount', { msgErrorUsuarioInexistente: 'Este usuario no existe'});
    },

    usersAdminEdit : (req,res,next) =>{
      let idUrl = req.params.id;
      let admin;
      req.body.admin ?  admin = true : admin = false;
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

      let usuariosCambiadosJSON = JSON.stringify(usuarioCambiado);
      fs.writeFileSync(dbDirectory, usuariosCambiadosJSON);
      res.redirect("/users/usersAdmin");
      },


    
    //  /users/register
    create : (req, res, next) => {
      res.render('users/register');
    },


    //  /users/register
    store : (req, res, next) => {
      // Enviar errores express-validator
      let errores = validationResult(req);
      errores.reqNombre = req.body.nombre;
      errores.reqEmail = req.body.email;
      if (!errores.isEmpty()){
        return res.render("users/register", {errors : errores})
      }

      // ID maximo para reemplazar
      let idMax = 0;

      //For para buscar el ID mas alto, y reemplazar idMax por el ID mas alto
      for(let i = 0 ; i < usuariosJson.length ; i++){
        if(usuariosJson[i].id > idMax){
          idMax = usuariosJson[i].id;
        }
      }
      
      //Sumarle 1 al ID mas alto, para crear un producto nuevo
      idMax = idMax + 1;

      //Hacer objeto completo, con el ID primero para mas comodidad
      let usuarioNuevo = {
        id : idMax,
        nombre : req.body.nombre,
        email : req.body.email,
        contrasenia : bcrypt.hashSync(req.body.contrasenia,10),
        admin : false,
        verify: [false, (Math.random()*15).toString(36).substring(2)]
      } 

      //Manda mail de verificacion
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

      

      //Sumar el usuario al array
      usuariosJson.push(usuarioNuevo);
      
      //Sobreescribe el archivo
      fs.writeFileSync(dbDirectory, JSON.stringify(usuariosJson));

      //Te envia a la vista una vez el form fue completado
      
      res.render("users/register", { verificarUsuario : "¡Te registraste! Por favor verifica tu dirección email."});
        }
      })
    },




    //  /users/login
    loginRender : (req, res, next) => {
      res.render('users/login');
    },

    loginIniciar : (req, res, next) => {
      // Enviar errores express-validator
      let errores = validationResult(req);
      errores.reqEmail = req.body.email;
      if (!errores.isEmpty()){
        return res.render("users/login", {errors : errores})
      }

      let buscarUsuario = usuariosJson.find(usuario => usuario.email == req.body.email);

      req.session.usuarioLogueado = buscarUsuario;

      if(req.body.recordameLogin != undefined){
        res.cookie('recordame', buscarUsuario.email,{ maxAge: 1000*60*60*24*365*3 })
      }

      res.redirect('back');
    },


    //  /users/perfil/:id (PAGINA VISUAL)
    perfilEdit : (req, res, next) => {
      let idUrl = req.params.id;

        let usuarioBuscado = usuariosJson.find( usuario => usuario.id == idUrl );
        
        usuarioBuscado ? (res.render("users/perfil", { usuario : usuarioBuscado })) : res.render("error")
    },


    // Modificacion del perfil
    perfilUpdate : (req, res, next) => {
      let idUrl = req.params.id;
      let errores = validationResult(req);
      let usuarioBuscado = usuariosJson.find( usuario => usuario.id == idUrl );
      if (!errores.isEmpty()){
        usuarioBuscado.errors = errores.errors;
        return res.render("users/perfil", { usuario : usuarioBuscado })
      }
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

      let usuariosCambiadosJSON = JSON.stringify(usuarioCambiado);
      fs.writeFileSync(dbDirectory, usuariosCambiadosJSON);
      res.redirect("/");
      },


      eliminar : (req, res, next) => {
        let idUrl = req.params.id;

        let eliminarUsuario = usuariosJson.filter(function(usuario){
          return usuario.id != idUrl;
        });
        let usuarioEliminadoJSON = JSON.stringify(eliminarUsuario);
        fs.writeFileSync(dbDirectory, usuarioEliminadoJSON);
        res.redirect("/");
      },

      pedidos : (req, res, next) => {
        let idUrl = req.params.id;

        let usuarioBuscado = usuariosJson.find( usuario => usuario.id == idUrl );
        
        usuarioBuscado ? (res.render("users/pedidos", usuarioBuscado)) : res.render("error")
      },

      




      verifyAccount: (req, res, next) => {
        let idUrl = req.params.id;

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

        return res.render('users/verifyAccount', { usuario : usuarioAVerificar });

      },
      reenviarEmail: (req, res, next) =>{
        let idUrl = req.params.id;

        let usuarioBuscado = usuariosJson.find( usuario => usuario.id == idUrl );
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
        res.render('users/verifyAccount', { msgErrorReenviado : "El codigo de verificación ha sido reenviado a tu dirección de correo electronico." })
      }
}

module.exports = usersController;