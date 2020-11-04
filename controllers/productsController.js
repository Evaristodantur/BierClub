let productsController = {
    index : (req, res, next) => {
        res.render('products/products');
    },
    productDetail : (req, res, next) => {
        res.render('products/productDetail');
    },
    productAdd : (req, res, next) => {
        res.render('products/productAdd');
    },
    productCart : (req, res, next) => {
        res.render('products/productCart');
    },
    productEdit : (req, res, next) => {
        res.render('products/productEdit');
    }
}

module.exports = productsController;