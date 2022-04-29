const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  id: String,
  playerId: String,
  teamId: String,
  leagueId: String,
  pos: String,
  cost: Number,
});

const model = mongoose.model("Pick", schema);

class Pick {
  static async all() {
    try {
      const allPicks = await module.find();
      return allPicks;
    } catch (error) {
      console.error("Error:", error);
    }
  }

  static async searchPickById(id) {
    try {
      const foundPick = await model.findOne({ playerID: id });
      return foundPick;
    } catch (error) {
      console.error("Error:", error);
    }
  }

  static async listTeam(teamId) {
    try {
      const foundTeam = await model.find({ teamId: teamId });
      return foundTeam;
    } catch (error) {
      console.error("Error:", error);
    }
  }

  static async addPick(id, playerId, teamId, leagueId, pos, cost) {
      try {
        // add the pick here
      }
    }
}
