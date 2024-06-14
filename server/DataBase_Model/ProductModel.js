const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CarTitems = new Schema({
  name: String,
  price: Number,
  description: String,
  image: String
});

const depModel = mongoose.model("CarTitems", CarTitems);

module.exports = depModel;
