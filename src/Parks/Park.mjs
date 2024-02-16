import mongoose from "mongoose";

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
      const foundPark = await model.findOne({ key: key });
      return foundPark;
    } catch (error) {
      console.error("Error:", error);
    }
  }

  static async searchByName(name) {
    try {
      const foundName = await model.find({ name: name });
      return foundName;
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

  static async searchByState(state) {
    try {
      const foundState = await model.find({ state: state });
      return foundState;
    } catch (error) {
      console.error("Error:", error);
    }
  }

  static async searchByCountry(country) {
    try {
      const foundCountry = await model.find({ country: country });
      return foundCountry;
    } catch (error) {
      console.error("Error:", error);
    }
  }
}

export default Park;
