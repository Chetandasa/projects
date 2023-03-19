const express = require('express');
const restaurantsController = require('../Controllers/Restaurants');
const router = express.Router();
router.post('/filterRestaurants', restaurantsController.filterRestaurants);

module.exports = router;