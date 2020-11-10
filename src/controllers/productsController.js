const path = require('path');
const fs = require('fs');

//Agregado database JSON
let productsJson = fs.readFileSync(path.resolve(__dirname, '../database/products.json'), 'utf-8');

productsJson == "" ?
    fs.writeFileSync(__dirname + "/../database/products.json", JSON.stringify(productsJson = [])) :
    productsJson = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/products.json'), 'utf-8'));


let productsController = {


    

    //  /products
    index : (req, res, next) => {
        res.render('products/products');
    },

    //  /products/productAdd - Pagina visual de agregar el producto
    productDetail : (req, res, next) => {
        let idUrl = req.params.id;

        let productoBuscado = productsJson.find(producto => producto.id == idUrl);

        productoBuscado ? (res.render("products/productDetail", productoBuscado)) : (res.render("error"));
    },
    




    // /products/productEdit/:id - Crea el producto
    createProduct : (req, res, next) => {
        res.render('products/productAdd');
      },
  
    storeProduct : (req, res, next) => {
        //Creacion de ID para los productos nuevos
        let idMax = 0;

        productsJson.forEach(producto => {
            if ( idMax < producto.id ) {
                idMax = producto.id;
            }
        });
        idMax++; //Le sumo uno a la ID para que no se repita

        //Crea el elemento nuevo
        let productoNuevo = {
            id : idMax,
            nombre : req.body.nombre,
            precio : req.body.precio,
            descuento : req.body.descuento,
            stock : req.body.stock,
            categoria : req.body.categoria,
            descripcion : req.body.descripcion
        }

        //Agrega la imagen
        req.files == "" ? 
            productoNuevo.imagen = "product-image-not-available.jpg" :
            productoNuevo.imagen = req.files[0].filename;
        

        //Lo guarda en el array Json
        productsJson.push(productoNuevo);
        
        fs.writeFileSync(__dirname + "/../database/products.json", JSON.stringify(productsJson));
        res.redirect('/products/productAdmin');
    },





    // /products/productEdit/:id - Pagina visual de Modificacion del producto
    editProduct : (req, res, next) => {

        let idUrl = req.params.id;

        let productoEncontrado = productsJson.find( producto => producto.id == idUrl );

        productoEncontrado ? (res.render('products/productEdit', productoEncontrado)) : res.render('error')
    },

    // /products/productEdit/:id - Actualizacion/Modificacion del producto
    updateProduct : (req, res, next) => {
        let idUrl = req.params.id;

        let productosModificado = productsJson.map( function(producto) {
            if (producto.id == idUrl) {
                //Backup De Productos, para usar la ID y la Imagen
                let productoBackUp = producto;

                //Pido los datos del formulario con los datos cambiados
                producto = {
                    id : productoBackUp.id,
                    nombre : req.body.nombre,
                    precio : req.body.precio,
                    descuento : req.body.descuento,
                    stock : req.body.stock,
                    categoria : req.body.categoria,
                    descripcion : req.body.descripcion
                }

                //incorporo el id y la imagen nueva, si es que tiene
                req.files[0] == undefined ?
                     producto.imagen = productoBackUp.imagen :
                     producto.imagen = req.files[0].filename;
                
            }
            return producto;
        });

        fs.writeFileSync(__dirname + "/../database/products.json", JSON.stringify(productosModificado));

        res.redirect('/products/productAdmin');
    },





    // /products/productEdit/borrar/:id - Borrar Producto
    deleteProduct : (req, res, next) => {
        let idUrl = req.params.id;

        let borrarProducto = productsJson.filter( producto => producto.id != idUrl );

        fs.writeFileSync(__dirname + "/../database/products.json", JSON.stringify(borrarProducto));

        res.redirect('/products/productAdmin');
    },




    //  /products/productAdmin
    productAdmin : (req, res, next) => {
        res.render('products/productAdmin', { productos : productsJson });
    },

    //  /products/productCart
    productCart : (req, res, next) => {
        res.render('products/productCart');
    }
}

module.exports = productsController;