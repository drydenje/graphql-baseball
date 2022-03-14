const { Schema, model } = require("mongoose");

const parkSchema = new Schema({
  key: String,
  name: String,
  city: String,
  state: String,
  country: String,
});

const mPark = model("Park", parkSchema);
console.log(mPark);
module.exports = {
  mPark,
};
