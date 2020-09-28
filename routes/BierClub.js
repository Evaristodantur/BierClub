var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('BierClub');
});

/* GET Promociones page. */
router.get('/promociones', function(req, res, next) {
  res.render('promociones');
});

module.exports = router;
