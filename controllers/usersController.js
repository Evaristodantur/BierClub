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

      console.log(idUrl);

      res.render('users/perfil');
    }
}

module.exports = usersController;