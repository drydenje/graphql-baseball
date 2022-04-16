const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  playerID: String,
  yearID: Number,
  // stint: Number,
  // teamID: String,
  // lgID: String,
  // iG: Number,
  // iAB: Number,
  // iR: Number,
  // iH: Number,
  // i2B: Number,
  // i3B: Number,
  // iHR: Number,
  // iRBI: Number,
  // iSB: Number,
  // iCS: Number,
  // iBB: Number,
  // iSO: Number,
  // iIBB: Number,
  // iHBP: Number,
  // iSH: Number,
  // iSF: Number,
  // iGIDP: Number,
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
      console.log(id);
      const foundBattingLines = await model.find({ playerID: id });
      console.log(foundBattingLines);
      // return foundBattingLines;
      return [
        {
          _id: { $oid: "6259ddd9ff6c628f6d62df7c" },
          playerID: "rojasjo01",
          yearID: 2019,
          stint: 1,
          teamID: "ARI",
          lgID: "NL",
          iG: 41,
          iAB: 138,
          iR: 17,
          iH: 30,
          i2B: 7,
          i3B: 0,
          iHR: 2,
          iRBI: 16,
          iSB: 4,
          iCS: 2,
          iBB: 18,
          iSO: 41,
          iIBB: 0,
          iHBP: 1,
          iSH: 0,
          iSF: 0,
          iGIDP: 3,
        },
      ];
    } catch (error) {
      console.error("Error:", error);
    }
  }
}

module.exports = {
  Batting,
};
