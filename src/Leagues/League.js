const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  id: String,
  name: String,
  // teams: [String],
  // positions: [String],
  // stats: [String],
});

const model = mongoose.model("League", schema);

class League {
  static async getLeague(id) {
    try {
      const foundLeague = await model.find({ leagueID: id });
      return [foundLeague];
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
