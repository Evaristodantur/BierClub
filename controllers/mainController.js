let mainController = {
    
    //  Home
    index : (req, res, next) => {
        res.render('index');
    },

    //  /about-us
    aboutUs : (req, res, next) => {
        res.render('aboutUs');
    },

    //  /promociones
    promociones : (req, res, next) => {
        res.render('promociones');
    },

    //  /suscripcion
    suscripcion : (req, res, next) => {
        res.render('suscripcion');
    },
    error : (req, res, next) => {
        res.render('error');
    }
}

module.exports = mainController;