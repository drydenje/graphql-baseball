const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  playerID: String,
  yearID: Number,
  stint: Number,
  teamID: String,
  lgID: String,
  iG: Number,
  iAB: Number,
  iR: Number,
  iH: Number,
  i2B: Number,
  i3B: Number,
  iHR: Number,
  iRBI: Number,
  iSB: Number,
  iCS: Number,
  iBB: Number,
  iSO: Number,
  iIBB: Number,
  iHBP: Number,
  iSH: Number,
  iSF: Number,
  iGIDP: Number,
});

const model = mongoose.model("Batting", schema);

class Batting {
  static async all() {
    try {
      const allStats = await model.find();
      return allStats;
    } catch (error) {
      console.error("Error:", error);
    }
  }

  static async searchByPlayerID(id) {
    try {
      const foundBattingLines = await model.find({ playerID: id });
      return foundBattingLines;
    } catch (error) {
      console.error("Error:", error);
    }
  }
}

module.exports = {
  Batting,
};
