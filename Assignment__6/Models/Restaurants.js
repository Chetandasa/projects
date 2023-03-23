const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const RestaurantSchema = new Schema({
  _id : {
    type : String,
    required : true
  },
  name : {
    type : String,
    required : true
  },
  city_name : {
    type : String,
    required : true
  },
  city : {
    type : Number,
    required : true
  },
  locality : {
    type : String,
    required : true
  },
  area : {
    type : Number,
    required : true
  },
  address : {
    type : String,
    required : true
  },
  thumb : {
    type : String,
    required : true
  },
  cost : {
    type : Number,
    required : true
  },
  contact_number : {
    type : String,
    required : true
  },
  name : {
    type : String,
    required : true
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

module.exports = mongoose.model('Restaurants', RestaurantSchema, 'Restaurants');