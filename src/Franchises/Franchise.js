const mongoose = require("mongoose");
const { Batting } = require("../Batting/Batting");
const { Player } = require("../Players/Player");

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

  static async getFranchiseRoster(teamID) {
    try {
      // find which players had at-bats for a specific team, and pull the year and count as well
      const {
        _id: year,
        players: hitters,
        count,
      } = await Batting.getLastRosterStats(teamID);

      // the playerID's that will be sent to the Player.js function
      const hittersToSearchFor = hitters.map((hitter) => {
        return hitter.playerID;
      });

      const foundHitters = await Player.getFranchiseRoster(hittersToSearchFor);
      console.log(foundHitters);

      // let obj = {};
      // let roster = [
      //   {
      //     name: "test",
      //     last: "ugh",
      //   },
      //   {
      //     name: "test",
      //     last: "ugh",
      //   },
      //   {
      //     name: "test",
      //     last: "ugh",
      //   },
      // ];
      // .then((docs) => {
      //   obj = Object.assign(docs, roster);
      // });
      // obj = {
      //   ...foundFranchise._doc,
      //   roster: roster,
      // };
      // console.log("OBJ:", obj);
      // console.log("stats:", stats);
    } catch (error) {
      console.error("Error:", error);
    }
  }
}

module.exports = {
  Franchise,
};
