const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const {validationResult} = require("express-validator");

//Agregado database JSON
let usuariosJson = fs.readFileSync(path.resolve(__dirname, '../database/usuarios.json'), 'utf-8');
let dbDirectory = path.resolve(__dirname, '../database/usuarios.json')

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
        console.log(errores);
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
        contrasenia : bcrypt.hashSync(req.body.contrasenia,10)
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
      let email = req.body.email;

      let buscarUsuario = usuariosJson.find(usuario => usuario.email == email)

      if(buscarUsuario == undefined){ return res.send("El email no se encuentra registrado") }

      if(req.body.email == buscarUsuario.email && bcrypt.compareSync(req.body.contrasenia,buscarUsuario.contrasenia)){
          return res.send("Iniciaste sesión")
      }else{
        return res.send("La contraseña es inconrrecta")
      }
    },




    //  /users/perfil/:id (PAGINA VISUAL)
    perfilEdit : (req, res, next) => {
      let idUrl = req.params.id;

        let usuarioBuscado = usuariosJson.find( usuario => usuario.id == idUrl );
        
        
        usuarioBuscado ? (res.render("users/perfil", usuarioBuscado)) : res.render("error")
    },


    // Modificacion del producto
    perfilUpdate : (req, res, next) => {
      let idUrl = req.params.id;

      let usuarioOriginal = usuariosJson.find( usuario => usuario.id == idUrl);
      if(req.body.contrasenia != req.body.confirmarContrasenia){ return res.send("Las contraseñas no coinciden") }
      if(!bcrypt.compareSync(req.body.antiguaContrasenia,usuarioOriginal.contrasenia)){ return res.send("La contraseña antigua no es correcta") }


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