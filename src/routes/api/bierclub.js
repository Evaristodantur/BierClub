const express = require('express');
const router = express.Router();

const apiBierClubController = require('../../controllers/api/apiBierClubController');

router.get('/getTotalRegisteredUsers', apiBierClubController.getTotalRegisteredUsers);
router.get('/getTotalProductsAdded', apiBierClubController.getTotalProductsAdded);
router.get('/getTotalSalesMade', apiBierClubController.getTotalSalesMade);
router.get('/getLastProductAdded', apiBierClubController.getLastProductAdded);
router.get('/getLastProductSold', apiBierClubController.getLastProductSold);
router.get('/getCategoryList', apiBierClubController.getCategoryList);
router.get('/getRegisteredUsers', apiBierClubController.getRegisteredUsers);
router.get('/getTheMostExpensiveProductSold', apiBierClubController.getTheMostExpensiveProductSold);

module.exports = router;