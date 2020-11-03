let usersController = {
    register : (req, res, next) => {
      res.render('users/register');
    },
    login : (req, res, next) => {
      res.render('users/login');
    },
    perfil : (req, res, next) => {
      res.render('users/perfil');
    }
}

module.exports = usersController;