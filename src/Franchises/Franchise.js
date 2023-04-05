const mongoose = require("mongoose");
const batting = require("../Batting");

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

  static async getFranchiseRoster(id) {
    // console.log(batting);
    // const stats = batting.resolvers.Query.lastYearsStats("BAL");
    let obj = {};
    let roster = [
      {
        name: "test",
        last: "ugh",
      },
      {
        name: "test",
        last: "ugh",
      },
      {
        name: "test",
        last: "ugh",
      },
    ];

    // .then((docs) => {
    //   obj = Object.assign(docs, roster);
    // });
    // obj = {
    //   ...foundFranchise._doc,
    //   roster: roster,
    // };
    // console.log("OBJ:", obj);
    // console.log("stats:", stats);
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
      const players = await model.find({ franchID: id });

      return players;
    } catch (error) {
      console.error("Error:", error);
    }
  }
}

module.exports = {
  Franchise,
};
