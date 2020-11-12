const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const { RSA_NO_PADDING } = require('constants');
//Agregado database JSON
let usuariosJson = fs.readFileSync(path.resolve(__dirname, '../database/usuarios.json'), 'utf-8');

usuariosJson == "" ?
    fs.writeFileSync(__dirname + "/../database/usuarios.json", JSON.stringify(usuariosJson = [])) :
    usuariosJson = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/usuarios.json'), 'utf-8'));

    
let usersController = {


    //    /users
    usersAdmin : (req, res, next) => {
      res.render('users/usersAdmin', { usuarios : usuariosJson });
    },
    //  /users/register
    create : (req, res, next) => {
      res.render('users/register');
    },


    //  /users/register
    store : (req, res, next) => {
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

      if(!req.body.terminosCondiciones){
        return res.send("Acepta los terminos y condiciones por favor.");
      }

      if(!bcrypt.compareSync(req.body.confirmarContrasenia,usuarioNuevo.contrasenia)){
        return res.send("Las contraseñas no coinciden");
      }

      //Sumar el usuario al array
      usuariosJson.push(usuarioNuevo);

      //Sobreescribe el archivo
      fs.writeFileSync(__dirname + "/../database/usuarios.json", JSON.stringify(usuariosJson));

      //Te envia a la vista una vez el form fue completado
      res.redirect("../");
    },




    //  /users/login
    loginRender : (req, res, next) => {
      res.render('users/login');
    },

    loginIniciar : (req, res, next) => {
      let email = req.body.email;

      //VALIDACIONES DE EMIAL Y CONTRASEÑA (Si estan puestos o no)
      if(email == "" && req.body.contrasenia == ""){ return res.send("El email y la contraseña estan vacios") }
      if(email == ""){ return res.send("El email esta vacio") }
      if(req.body.contrasenia == ""){ return res.send("La contraseña esta vacia") }


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