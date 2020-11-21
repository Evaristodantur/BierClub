let path = require('path');
let multer = require('multer');
let fs = require('fs');

//Almacenamiento de las imagenes
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './src/public/images/productos')
    },
    filename: function (req, file, cb) {
      cb(null, 'producto' + '-' + Date.now() + path.extname(file.originalname));
    }
  });

  let multerUpload = multer({ storage: storage,
    fileFilter: (req, file, cb) => {        
          console.log(req.files.length)

          let unoFueFiltrado = false;

          if(file.mimetype != "image/png" && 
              file.mimetype != "image/jpg" && 
              file.mimetype != "image/jpeg"){
                
                unoFueFiltrado = true;

          cb(null, false);
        }

        if(unoFueFiltrado == false) {
          cb(null, true);
        } else {
          req.files = [];
          cb(null, false);
        }

    }
});


  module.exports = multerUpload;