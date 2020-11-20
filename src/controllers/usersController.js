const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const {validationResult} = require("express-validator");

//Agregado database JSON
let dbDirectory = path.resolve(__dirname, '../database/usuarios.json')
let usuariosJson = fs.readFileSync(dbDirectory, 'utf-8');

usuariosJson == "" ?
    fs.writeFileSync(dbDirectory, JSON.stringify(usuariosJson = [])) :
    usuariosJson = JSON.parse(fs.readFileSync(dbDirectory), 'utf-8');

    
let usersController = {


    //    /users/usersAdmin
    usersAdmin : (req, res, next) => {
      res.render('users/usersAdmin', { usuarios : usuariosJson });
    },
    //    /users/usersAdmin
    usersAdminCambios : (req,res,next) =>{
      let usuarioModificado = req.body;
      let usuariosCompletos = usuariosJson.map(usuario => usuarioModificado.id == usuario.id);

      fs.writeFileSync(dbDirectory, JSON.stringify(usuariosCompletos));
      res.redirect("../")
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

      /* let check = bcrypt.compareSync(contraseniaCompleta,passEcritpada); */
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
      }console.log(req.cookies);
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
      if (!errores.isEmpty()){
        let usuarioBuscado = usuariosJson.find( usuario => usuario.id == idUrl );
        usuarioBuscado.errors = errores.errors;
        return res.render("users/perfil", { usuario : usuarioBuscado })
      }

       let usuarioCambiado = usuariosJson.map(function(usuario){
        if(usuario.id == idUrl){
           usuario = {
            id : idUrl,
            nombre : req.body.nombre,
            email : req.body.email,
            contrasenia : bcrypt.hashSync(req.body.contrasenia,10)
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
      }
    }

module.exports = usersController;