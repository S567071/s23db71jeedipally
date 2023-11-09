const mongoose = require("mongoose");

const costumeSchema = mongoose.Schema({
  Apartment_name: String,
  location: String,
  rent: Number,
});

module.exports = mongoose.model("Apartment", costumeSchema);