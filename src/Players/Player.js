const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  playerID: String,
  birthYear: Number,
  birthMonth: Number,
  birthDay: Number,
  birthCountry: String,
  birthState: String,
  birthCity: String,
  nameFirst: String,
  nameLast: String,
  nameGiven: String,
  weight: Number,
  height: Number,
  bats: String,
  throws: String,
  debut: String,
  finalGame: String,
  retroID: String,
  bbrefID: String,
  deathYear: Number,
  deathMonth: Number,
  deathDay: Number,
  deathCountry: String,
  deathState: String,
  deathCity: String,
});

const model = mongoose.model("Player", schema);

class Player {
  static async all() {
    try {
      const allPlayers = await model.find();
      return allPlayers;
    } catch (error) {
      console.error("Error:", error);
    }
  }

  static async searchByID(id) {
    try {
      const foundPlayer = await model.findOne({ playerID: id });
      return foundPlayer;
    } catch (error) {
      console.error("Error:", error);
    }
  }

  static async searchByTeam(teamID) {
    try {
      const teamRoster = await model.find();
      return teamRoster;
    } catch (error) {
      console.error("Error:", error);
    }
  }
}

module.exports = {
  Player,
};
