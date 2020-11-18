let path = require('path');
let multer = require('multer');

//Almacenamiento de las imagenes
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './src/public/images/productos')
    },
    filename: function (req, file, cb) {
      cb(null, 'producto' + '-' + Date.now() + path.extname(file.originalname));
    }
  });
   
  var multerUpload = multer({ storage: storage });
  


  module.exports = multerUpload;