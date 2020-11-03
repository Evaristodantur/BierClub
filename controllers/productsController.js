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
    }
}

module.exports = productsController;