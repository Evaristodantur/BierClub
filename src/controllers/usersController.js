const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
//Agregado database JSON
let usuariosJson = fs.readFileSync(path.resolve(__dirname, '../database/usuarios.json'), 'utf-8');

usuariosJson == "" ?
    fs.writeFileSync(__dirname + "/../database/usuarios.json", JSON.stringify(usuariosJson = [])) :
    usuariosJson = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/usuarios.json'), 'utf-8'));

    
let usersController = {


    //    /users
    index : (req, res, next) => {
      res.render('users/users', { usuarios : usuariosJson });
    },
    //  /users/register
    create : (req, res, next) => {
      res.render('users/register');
    },


    //  /users/register
    store : (req, res, next) => {
      let confirmarContrasenia = req.body.confirmarContrasenia;
      let contraseniaUsuario = req.body.contrasenia;

      if(confirmarContrasenia != contraseniaUsuario){
        return res.send("Las contraseñas son diferentes. Vuelva a escribirlo");
      }
      let terminosCondiciones = req.body.terminosCondiciones;
      if(!terminosCondiciones){
        return res.send("Acepta los terminos y condiciones por favor.");
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

      //Encriptar contraseña
      let contraseniaCompleta = req.body.contrasenia;
      let passEcritpada = bcrypt.hashSync(contraseniaCompleta,10); 

      /* let check = bcrypt.compareSync(contraseniaCompleta,passEcritpada); */
      //Hacer objeto completo, con el ID primero para mas comodidad
      let usuarioNuevo = {
        id : idMax,
        nombre : req.body.nombre,
        email : req.body.email,
        contrasenia : passEcritpada
      }

      //Sumar el usuario al array
      usuariosJson.push(usuarioNuevo);

      //Convierte el Array en JSON
      let usersJSON = JSON.stringify(usuariosJson);

      //Sobreescribe el archivo
      fs.writeFileSync(__dirname + "/../database/usuarios.json", usersJSON);

      //Te envia a la vista una vez el form fue completado
      res.redirect("../");
    },




    //  /users/login
    login : (req, res, next) => {
      res.render('users/login');
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

      let usuarioCambiado = usuariosJson.map(function(usuario){
        if(usuario.id == idUrl){
          let usuarioId = usuario.id;
          usuario = req.body;
          usuario.id = usuarioId;
        }
        return usuario;
      });
      let usuariosCambiadosJSON = JSON.stringify(usuarioCambiado);
      fs.writeFileSync(__dirname + "/../database/usuarios.json", usuariosCambiadosJSON);
      res.redirect("/");
      },


      eliminar : (req, res, next) => {
        let idUrl = req.params.id;

        let eliminarUsuario = usuariosJson.filter(function(usuario){
          return usuario.id != idUrl;
        });
        let usuarioEliminadoJSON = JSON.stringify(eliminarUsuario);
        fs.writeFileSync(__dirname + "/../database/usuarios.json", usuarioEliminadoJSON);
        res.redirect("/");
      },
      pedidos : (req, res, next) => {
        let idUrl = req.params.id;

        let usuarioBuscado = usuariosJson.find( usuario => usuario.id == idUrl );
        
        usuarioBuscado ? (res.render("users/pedidos", usuarioBuscado)) : res.render("error")
      }
    }

module.exports = usersController;