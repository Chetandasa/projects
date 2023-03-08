const express = require('express');

var CityListConroller = require('../Controllers/City');
var RestaurantsController = require('../Controllers/Restaurants');

const router = express.Router();

router.get('/getCityList',CityListConroller.getCityList);
router.get('/getRestarantsByCityName/:cityname', RestaurantsController.getRestarantsByCityName);

module.exports = router;