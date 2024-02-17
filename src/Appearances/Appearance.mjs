import mongoose from "mongoose";

const schema = new mongoose.Schema({
  yearID: Number,
  teamID: String,
  lgID: String,
  playerID: String,
  G_all: Number,
  GS: Number,
  G_batting: Number,
  G_defense: Number,
  G_p: Number,
  G_c: Number,
  G_1b: Number,
  G_2b: Number,
  G_3b: Number,
  G_ss: Number,
  G_lf: Number,
  G_cf: Number,
  G_rf: Number,
  G_of: Number,
  G_dh: Number,
  G_ph: Number,
  G_pr: Number,
});

const model = mongoose.model("Appearance", schema);

class Appearance {
  // static async all() {
  //   try {
  //     const allAppearances = await model.find();
  //     return allAppearances;
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // }

  static async searchByPlayerID(id) {
    try {
      const foundAppearances = await model.find({ playerID: id });
      return foundAppearances;
    } catch (error) {
      console.error("Error:", error);
    }
  }
}

export default Appearance;
