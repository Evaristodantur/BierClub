var express = require('express');
var router = express.Router();

//Controladores
let mainController = require('../controllers/mainController');

/* GET home page. */
<<<<<<< HEAD
router.get('/', mainController.index);
=======
router.get('/', (req, res, next) => {
  res.render('index');
});
>>>>>>> 94714df394fe61b34d376c93c040485d6adcb791

/* GET About us page. */
router.get('/about-us', (req, res, next) => {
  res.render('aboutUs');
});


module.exports = router;
