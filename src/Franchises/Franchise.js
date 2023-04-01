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

  static async searchByID(id) {
    try {
      let foundFranchise = await model.findOne({ franchID: id });
      const roster = {
        name: "test",
        last: "ugh",
      };
      let obj = Object.assign(roster, foundFranchise);
      console.log("OBJ:", obj);
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

  static async getFranchiseRoster() {
    // [
    //   {
    //     $match: {
    //       playerID: {
    //         $in: ["abramge01", "adamsgl01"],
    //       },
    //     },
    //   },
    // ];
    try {
      const players = await model.find();

      return players;
    } catch (error) {
      console.error("Error:", error);
    }
  }
}

module.exports = {
  Franchise,
};
