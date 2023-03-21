const { response } = require('express');
const RestaurantSchema = require('../Models/Restaurants');

exports.filterRestaurants = (req, res) => {
  let {mealtype, cuisine, location, lcost, hcost, page, sort } = req.body;
  
  page = page ? page : 1;
  sort = sort ? sort : 1; // 1 is for accending & -1 is for descending

  let Payload = {};
  const itemsPerPage = 2;

  let startIndex = itemsPerPage * page - itemsPerPage; // 2 * 3 - 2 - 4
  let endIndex = itemsPerPage * page; // 2 * 3 - 6

  if(mealtype) {
    Payload['type.mealtype'] = mealtype;
  }
  if(mealtype && cuisine) {
    Payload['type.mealtype'] = mealtype;
    Payload['Cuisine.cuisine'] = { $in : cuisine}
  }
  if(mealtype && lcost && hcost) { //split function to extract lcost and hcost delimitor - 500 - 1000
    Payload['type.mealtype'] = mealtype;
    Payload["cost"] = {$lte : hcost, $gte : lcost };
  }
  if(mealtype && cuisine && lcost && hcost) {
    Payload['type.mealtype'] = mealtype;
    Payload['Cuisine.cuisine'] = { $in : cuisine};
    Payload["cost"] = { $lte : hcost, $gte : lcost };
  }
  if(mealtype && location) {
    Payload['type.mealtype'] = mealtype;
    Payload['locality'] = location;
  }
  if(mealtype && location && cuisine){
    Payload['type.mealtype'] = mealtype;
    Payload['locality'] = location;
    Payload['Cuisine.cuisine'] = { $in : cuisine};
  }
  if(mealtype && location && lcost && hcost) {
    Payload['type.mealtype'] = mealtype;
    Payload['locality'] = location;
    Payload["cost"] = {$lte : hcost, $gte : lcost };
  }
  if(mealtype && location && lcost && hcost && cuisine) {
    Payload['type.mealtype'] = mealtype;
    Payload['locality'] = location;
    Payload["cost"] = {$lte : hcost, $gte : lcost };
    Payload['Cuisine.cuisine'] = { $in : cuisine};
  }
  // find()
  RestaurantSchema.find(Payload).sort({cost : sort})
    .then(response => {
      const filteredResponse = reaponse.slice(startIndex,endIndex);
      res.status(200).json({
        message : "Restaurant fetched successfully",
        restaurant : filteredResponse
      })
    }).catch(err => {
      res.status(400).json({error : err});
    })
}