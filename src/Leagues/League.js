const mongoose = require("mongoose");

const PositionSchema = new mongoose.Schema({
  position: String,
  positionType: String,
  count: Number,
});

const schema = new mongoose.Schema({
  leagueId: String,
  name: String,
  // teams: [String],
  positions: [PositionSchema],
  // stats: [String],
});

const model = mongoose.model("League", schema);

class League {
  static async all() {
    try {
      const allLeagues = await model.find();
      return allLeagues;
    } catch (error) {
      console.error("Error:", error);
    }
  }

  static async getLeague(id) {
    try {
      const foundLeague = await model.findOne({ leagueId: id });
      return foundLeague;
    } catch (error) {
      console.error("Error:", error);
    }
  }

  // static async createLeague(id, name, teams, positions, stats) {
  //   try {
  //     // insert a new league
  //     const league = await model.create({
  //       id,
  //       name,
  //       // teams,
  //       // positions,
  //       // stats,
  //     });
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // }
}

module.exports = {
  League,
};
