const { truncate } = require("fs");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CoffeeSchema = new Schema({
  coffeeName: {
    type: String,
    required: true,
    unique: true,
  },
  coffeeType: {
    type: String,
    required: true,
    unique: true,
  },
  coffeeKeyTag: { type: [String], unique: true },
  description: String,
  image: String,
  price: { type: Number, unique: true },
  coffeeOrigin: String,
  coffeeWebsite: String,
  meta: {
    coffeeRating: Number,
    coffeeReview: Number,
    coffeeLike: Number,
    coffeeDislike: Number,
    coffeeDate: {
      createAt: { type: Date, default: Date.now },
      updatedAt: { type: Date, default: Date.now, set: (v) => v.Date.now() },
    },
  },
});

module.exports = mongoose.model("coffee", CoffeeSchema);
