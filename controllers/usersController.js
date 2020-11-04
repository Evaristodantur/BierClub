const path = require('path');
const fs = require('fs');

//Agregado database JSON
let perfilJson = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/perfil.json'), 'utf-8'));

let usersController = {

    //  /users/register
    register : (req, res, next) => {
      res.render('users/register');
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