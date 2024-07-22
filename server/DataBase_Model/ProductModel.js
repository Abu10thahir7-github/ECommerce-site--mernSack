const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CarTitems = new Schema({
  Name: String,
  Description: {
    type: String,
   
  },
  BrandName: String,
  Category: String,
  image: String,
  price: Number,
  time: Number,
  Rating: {
    type: Number,
    default: 0,
  },
  StarRating: {
    type: Array,
    default: [],
  },
  favorites: {
    type: Array,
    default: [],
  },
  imageUrl: { type: String },
  // comments: [Comment.schema],
});

const depModel = mongoose.model("CarTitems", CarTitems);

module.exports = depModel;
