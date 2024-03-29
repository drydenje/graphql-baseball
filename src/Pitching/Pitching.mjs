import mongoose from "mongoose";

const schema = new mongoose.Schema({
  playerID: String,
  yearID: Number,
  stint: Number,
  teamID: String,
  lgID: String,
  W: Number,
  L: Number,
  G: Number,
  GS: Number,
  CG: Number,
  SHO: Number,
  SV: Number,
  IPouts: Number,
  H: Number,
  ER: Number,
  HR: Number,
  BB: Number,
  SO: Number,
  BAOpp: Number,
  ERA: Number,
  IBB: Number,
  WP: Number,
  HBP: Number,
  BK: Number,
  BFP: Number,
  GF: Number,
  R: Number,
  SH: Number,
  SF: Number,
  GIDP: Number,
});

const model = mongoose.model("Pitching", schema);

class Pitching {
  static async searchByPlayerID(id) {
    try {
      const foundStatline = await model.find({ playerID: id });
      return foundStatline;
    } catch (error) {
      console.error("Error:", error);
    }
  }

  static async getLastRosterStats(teamID) {
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
      return foundLastYear[0];
    } catch (error) {
      console.error("Error:", error);
    }
  }
}

export default Pitching;
