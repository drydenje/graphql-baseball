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

  static async searchByPlayerID(id, limit, sort) {
    let toSort = null;
    switch (sort) {
      case "ASC":
        toSort = 1;
        break;
      case "DESC":
        toSort = -1;
      default:
        break;
    }

    try {
      const foundBattingLines = await model
        .find({ playerID: id })
        .sort({ yearID: toSort })
        .limit(limit);
      return foundBattingLines;
    } catch (error) {
      console.error("Error:", error);
    }
  }

  static async getLastRosterStats(teamID) {
    // static async getTeamRoster(teamID) {
    try {
      const match = { teamID: teamID };
      const group = {
        _id: "$yearID",
        players: {
          $push: "$$ROOT",
        },
        count: {
          $sum: 1,
        },
      };
      const sort = { _id: -1 };
      const foundLastYear = await model.aggregate([
        { $match: match },
        { $group: group },
        { $sort: sort },
        { $limit: 1 },
      ]);
      // console.log(foundLastYear);
      // const lastYear = foundLastYear[0]._id;
      // console.log("lastYear:", lastYear);
      // const playersToSearchFor = foundLastYear[0].players;
      // console.log("players:", playersToSearchFor);
      // const records = await model.find({
      // teamID: teamID,
      // yearID: y,
      //   playerID: "abadfe01",
      // });
      // console.log(records);
      // return records;
      return foundLastYear[0];
    } catch (error) {
      console.error("Error:", error);
    }
  }
}

module.exports = {
  Batting,
};
