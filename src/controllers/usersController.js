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
      usuarioBuscado ? (res.render("users/usersAdminEdit", { usuarios : usuarioBuscado })) : res.send("El usuario que queres editar no existe")
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
            admin : admin
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
      if (!errores.isEmpty()){
        return res.render("users/register", {errors : errores.errors})
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
        admin: false
      }

      //Sumar el usuario al array
      usuariosJson.push(usuarioNuevo);
      
      //Sobreescribe el archivo
      fs.writeFileSync(dbDirectory, JSON.stringify(usuariosJson));

      //Te envia a la vista una vez el form fue completado
      res.redirect("../");
    },




    //  /users/login
    loginRender : (req, res, next) => {
      res.render('users/login');
    },

    loginIniciar : (req, res, next) => {
      // Enviar errores express-validator
      let errores = validationResult(req);

      if (!errores.isEmpty()){
        return res.render("users/login", {errors : errores.errors})
      }

      let buscarUsuario = usuariosJson.find(usuario => usuario.email == req.body.email);

      req.session.usuarioLogueado = buscarUsuario;

      if(req.body.recordameLogin != undefined){
        res.cookie('recordame', buscarUsuario.email,{ maxAge: 1000*60*60*24*365*3 })
      }
      res.redirect("/")
    },




    //  /users/perfil/:id (PAGINA VISUAL)
    perfilEdit : (req, res, next) => {
      let idUrl = req.params.id;

        let usuarioBuscado = usuariosJson.find( usuario => usuario.id == idUrl );
        
        usuarioBuscado ? (res.render("users/perfil", { usuario : usuarioBuscado })) : res.render("error")
    },

    // Modificacion del producto
    perfilUpdate : (req, res, next) => {
      let idUrl = req.params.id;
      let errores = validationResult(req);
      let usuarioBuscado = usuariosJson.find( usuario => usuario.id == idUrl );
      let admin = usuarioBuscado.admin;
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
            contrasenia : req.body.contrasenia,
            admin
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
      contactoRender : (req, res, next) => {
        res.render("users/contacto")
      },
      contactoSend : (req, res, next) => {

        let transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.email,
            pass: process.env.password
          }
        });
        const output = `<h1>Detalles de contacto:</h1> \n - Nombre: ${req.body.nombre} \n - Email: ${req.body.email} \n \n - Mensaje: \n ${req.body.message}`
        let mailOptions = {
          from: process.env.email,
          to: process.env.email,
          subject: req.body.subject,
          html: output
        }

        transporter.sendMail(mailOptions, function(err, data){
          if(err){
            console.log("ERROR");
          }else{
            console.log("Se envió bien!");
          }
        })
        res.send("mamame el huevo derecho")
      }
    }

module.exports = usersController;