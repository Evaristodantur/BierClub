var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
});

/* GET About us page. */
router.get('/about-us', (req, res, next) => {
  res.render('aboutUs');
});


module.exports = router;
