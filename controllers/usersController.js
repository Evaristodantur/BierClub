let usersController = {
    register: function(req, res, next) {
        res.render('users/register');
      },
    login: function(req, res, next) {
        res.render('users/login');
      }
}

module.exports = usersController;