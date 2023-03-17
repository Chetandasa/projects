const City = require('../Models/City.json');

exports.getCityList = (req,res) => {
  const result = City.map(item => item.name);
  res.status(200).json({ 
    message: "City list loaded successfully",
    city: result
  })
}