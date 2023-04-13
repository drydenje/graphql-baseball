const mongoose = require("mongoose");
const { Batting } = require("../Batting/Batting");
const { Pitching } = require("../Pitching/Pitching");
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
      // find which players had at-bats for a specific team
      const { players: hitterStats } = await Batting.getLastRosterStats(teamID);
      const { players: pitcherStats } = await Pitching.getLastRosterStats(
        teamID
      );

      // the playerID's that will be sent to the Player.js function
      const hittersToSearchFor = hitterStats.map((hitter) => {
        return hitter.playerID;
      });
      const pitchersToSearchFor = pitcherStats.map((pitcher) => {
        return pitcher.playerID;
      });

      const foundHitters = await Player.getFranchiseRoster(
        hittersToSearchFor,
        teamID
      );

      const foundPitchers = await Player.getFranchiseRoster(
        pitchersToSearchFor,
        teamID
      );

      // currently returning pitchers with 1 or so AB's, maybe sort them to the bottom on the client side?
      const roster = {
        hitters: foundHitters,
        pitchers: foundPitchers,
      };
      return roster;
    } catch (error) {
      console.error("Error:", error);
    }
  }
}

module.exports = {
  Franchise,
};
