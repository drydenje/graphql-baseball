const mongoose = require("mongoose");

// const schema = new mongoose.Schema({

// })

class League {
  static async getLeague(id) {
    try {
      const foundLeague = await module.find({ leagueID: id });
      return founndLeague;
    } catch (error) {
      console.error("Error:", error);
    }
  }

  static async createLeague(id, name, teams, positions, stats) {
    try {
      // insert a new league
    } catch (error) {
      console.error("Error:", error);
    }
  }
}

module.exports = {
  League,
};
