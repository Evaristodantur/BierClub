let mainController = {
    index : (req, res, next) => {
        res.render('index');
    },
    aboutUs : (req, res, next) => {
        res.render('aboutUs');
    },
    promociones : (req, res, next) => {
        res.render('promociones');
    },
    suscripcion : (req, res, next) => {
        res.render('suscripcion');
    }
}

module.exports = mainController;