const Restaurants = require('../Models/Restaurants.json');

exports.getRestarantsByCityName = (req, res) => {
  const cityName = req.params.cityname;
  const result = Restaurants.filter(item => item.city_name === cityName);
  res.status(200).json({
    message:'Restaurants list by City Name fetched successfully',
    restaurant : result
  })
}