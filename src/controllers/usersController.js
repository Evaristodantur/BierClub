const path = require('path');
const fs = require('fs');

//Agregado database JSON
let usuariosJson = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/usuarios.json'), 'utf-8'));

let usersController = {

    //  /users/register
    create : (req, res, next) => {
      res.render('users/register');
    },

    store : (req, res, next) => {
      usuariosJson.push(req.body);
      let usersJSON = JSON.stringify(usuariosJson);
      fs.writeFileSync(__dirname + "/../database/usuarios.json", usersJSON);
      res.send('Se ha registrado' + req.body.nombre);
    },

    //  /users/login
    login : (req, res, next) => {
      res.render('users/login');
    },

    //  /users/perfil/:id
    perfil : (req, res, next) => {
      let idUrl = req.params.id;

        let perfilBuscado = perfilJson.find(perfil => perfil.id == idUrl);
        
        perfilBuscado ? (res.render("users/perfil",perfilBuscado)) : res.render("error")

    }
}

module.exports = usersController;