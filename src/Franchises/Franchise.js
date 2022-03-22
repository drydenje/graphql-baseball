const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  franchID: String,
  franchName: String,
  active: String,
  NAassoc: String,
});

const model = mongoose.model("Franchise", schema);

class Franchise {
  static async all() {
    try {
      const allFranchises = await model.find();
      return allFranchises;
    } catch (error) {
      console.error("Error:", error);
    }
  }

  static async franchise(id) {
    try {
      const foundFranchise = await model.find({ franchID: id });
      return foundFranchise;
    } catch (error) {
      console.error("Error:", error);
    }
  }

  static async activeFranchises() {
    try {
      const foundFranchises = await model.find({ active: "Y" });
      return foundFranchises;
    } catch (error) {
      console.error("Error:", error);
    }
  }
}

module.exports = {
  Franchise,
};
