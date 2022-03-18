const mongoose = require("mongoose");

// The mongoose schema for the 'Parks' object
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

  static async searchByKey(key) {
    try {
      // const foundPark = await model.findById("6228e1919604c61c8260323e");
      // const foundPark = await model.find();
      const foundPark = await model.findOne({ key: key });
      return foundPark;
    } catch (error) {
      console.error("Error:", error);
    }
  }

  static async searchByCity(city) {
    try {
      const foundParks = await model.find({ city: city });
      return foundParks;
    } catch (error) {
      console.error("Error:", error);
    }
  }
}

module.exports = {
  Park,
};
