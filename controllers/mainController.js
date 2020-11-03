let mainController = {
    index : (req, res, next) => {
        res.render('index');
    },
    aboutUs : (req, res, next) => {
        res.render('aboutUs');
    }
}

module.exports = mainController;