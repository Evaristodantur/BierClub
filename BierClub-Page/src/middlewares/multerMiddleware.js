// Multer, carga y filtrado de archivos

let path = require("path");
let multer = require("multer");

//Almacenamiento de las imagenes
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./src/public/images/productos");
  },
  filename: function (req, file, cb) {
    cb(null, "producto" + "-" + Date.now() + path.extname(file.originalname));
  },
});

let multerUpload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (req.imagenGuardada == undefined) {
      req.imagenGuardada = [];
      req.imagenGuardada.push(file);
    } else {
      req.imagenGuardada.push(file);
    }

    if (
      file.mimetype != "image/png" &&
      file.mimetype != "image/jpg" &&
      file.mimetype != "image/jpeg"
    ) {
      return cb(null, false);
    }

    cb(null, true);
  },
});

module.exports = multerUpload;
