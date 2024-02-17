import mongoose from "mongoose";

const schema = new mongoose.Schema({
  IDPLAYER: String,
  PLAYERNAME: String,
  BIRTHDATE: String,
  FIRSTNAME: String,
  LASTNAME: String,
  TEAM: String,
  LG: String,
  POS: String,
  IDFANGRAPHS: String,
  FANGRAPHSNAME: String,
  MLBID: String,
  MLBNAME: String,
  CBSID: String,
  CBSNAME: String,
  RETROID: String,
  BREFID: String,
  NFBCID: String,
  NFBCNAME: String,
  ESPNID: String,
  ESPNNAME: String,
  KFFLNAME: String,
  DAVENPORTID: String,
  BPID: String,
  YAHOOID: String,
  YAHOONAME: String,
  MSTRBLLNAME: String,
  BATS: String,
  THROWS: String,
  FANTPROSNAME: String,
  LASTCOMMAFIRST: String,
  ROTOWIREID: String,
  FANDUELNAME: String,
  FANDUELID: String,
  DRAFTKINGSNAME: String,
  OTTONEUID: String,
  HQID: String,
  RAZZBALLNAME: String,
  FANTRAXID: String,
  FANTRAXNAME: String,
  ROTOWIRENAME: String,
  ALLPOS: String,
  NFBCLASTFIRST: String,
  ACTIVE: String,
});

const model = mongoose.model("Lookup", schema);

class Lookup {
  static async lookupByYahooID(id) {
    try {
      const foundPlayer = await model.findOne({ YAHOOID: id });
      // console.log(foundPlayer.IDPLAYER);
      return foundPlayer.IDPLAYER;
    } catch (error) {
      console.error("Error:", error);
    }
  }
}

export default Lookup;
