const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  key: String,
  name: String,
  city: String,
  state: String,
  country: String,
});

const model = mongoose.model("Park", schema);

module.exports = {
  model,
};
