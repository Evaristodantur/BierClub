const express = require('express');
const router = express.Router();

const apiBierClubController = require('../../controllers/api/apiBierClubController');

router.get('/', apiBierClubController.index);

module.exports = router;