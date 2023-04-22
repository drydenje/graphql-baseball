const mongoose = require("mongoose");
const { Batting } = require("../Batting/Batting");
const { Pitching } = require("../Pitching/Pitching");
const { Player } = require("../Players/Player");

const schema = new mongoose.Schema({
  franchID: String,
  franchName: String,
  active: String,
  NAassoc: String,
  league: String,
  division: String,
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

  // Takes franchID and returns a teamID
  // used in updateTeams for other query lookups
  static async updateTeamID() {
    try {
      const teamID = {
        NYY: "NYA", //
        BAL: "BAL",
        TBD: "TBA", //
        TOR: "TOR",
        BOS: "BOS",
        MIN: "MIN",
        CLE: "CLE",
        CHW: "CHA", //
        DET: "DET",
        KCR: "KCA", //
        TEX: "TEX",
        ANA: "ANA",
        SEA: "SEA",
        HOU: "HOU",
        OAK: "OAK",
        ATL: "ATL",
        NYM: "NYN", //
        FLA: "MIA", //
        PHI: "PHI",
        WSN: "WAS", //
        MIL: "MIL",
        PIT: "PIT",
        CHC: "CHN", //
        STL: "SLN", //
        CIN: "CIN",
        ARI: "ARI",
        LAD: "LAN", //
        SDP: "SDN", //
        SFG: "SFN", //
        COL: "COL",
      };

      // turn teamID keys into an array
      const teams = Object.keys(teamID);

      // model.updateMany this array
      const update = await model.updateMany(
        {
          // franchID: { $in: teams },
          franchID: { $in: ["NYY", "TOR"] },
        },
        {
          $set: {
            // teamID: teams[teamID],
            teamID: "test",
          },
        }
      );
      // set the teamID for each team
      console.log(update);
      return true;
    } catch (error) {
      console.error(error);
    }

    // return teamID[franchID];
  }
  // console.log("TEST:", franchToTeam("NYY"));

  static async updateTeams(value) {
    // console.log("value:", value.teams);
    try {
      const update = await model.updateMany(
        {
          franchID: { $in: value.teams },
        },
        {
          $set: {
            league: value.league,
            division: value.division,
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  }

  static async adjustFranchiseTable() {
    try {
      const divisions = {
        AmericanEast: {
          teams: ["TBD", "TOR", "NYY", "BAL", "BOS"],
          league: "American",
          division: "East",
        },
        AmericanCentral: {
          teams: ["MIN", "CLE", "CHW", "DET", "KCR"],
          league: "American",
          division: "Central",
        },
        AmericanWest: {
          teams: ["TEX", "ANA", "SEA", "HOU", "OAK"],
          league: "American",
          division: "West",
        },
        NationalEast: {
          teams: ["ATL", "NYM", "FLA", "PHI", "WSN"],
          league: "National",
          division: "East",
        },
        NationalCentral: {
          teams: ["MIL", "PIT", "CHC", "STL", "CIN"],
          league: "National",
          division: "Central",
        },
        NationalWest: {
          teams: ["ARI", "LAD", "SDP", "SFG", "COL"],
          league: "National",
          division: "West",
        },
      };

      console.log("test");
      this.updateTeamID();

      // Object.entries(divisions).forEach(([key, value]) => {
      //   this.updateTeams(value);
      // });

      return true;
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = {
  Franchise,
};
