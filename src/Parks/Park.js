const mongoose = require("mongoose");
// const { parks } = require("./data");

const schema = new mongoose.Schema({
  key: String,
  name: String,
  city: String,
  state: String,
  country: String,
});

const model = mongoose.model("Park", schema);
class Park {
  static async all() {
    try {
      const allParks = await model.find();
      return allParks;
    } catch (error) {
      console.error("Error:", error);
    }
  }

  // static byKey(key) {
  //   const foundPark = parks.find((park) => {
  //     return park.key === key;
  //   });
  //   return foundPark;
  // }
}

module.exports = {
  Park,
};
