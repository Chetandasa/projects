const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const RestaurantSchema = new Schema({
  _id : {
    type : String,
    require : true
  },
  name : {
    type : String,
    require : true
  },
  city_name : {
    type : String,
    require : true
  },
  city : {
    type : Number,
    require : true
  },
  locality : {
    type : String,
    require : true
  },
  area : {
    type : Number,
    require : true
  },
  address : {
    type : String,
    require : true
  },
  thumb : {
    type : String,
    require : true
  },
  cost : {
    type : Number,
    require : true
  },
  contact_number : {
    type : String,
    require : true
  },
  name : {
    type : String,
    require : true
  },
  type :[{
    mealtype : Number,
    name : String
  }],
  Cuisine : [{
    cuisine : Number,
    name : String
  }]
});

module.exports = mongoose.model('Restaurant', RestaurantSchema, 'Restaurant');