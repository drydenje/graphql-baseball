const mongoose = require("mongoose");

const PositionSchema = new mongoose.Schema({
  position: String,
  positionType: String,
  count: Number,
});

const schema = new mongoose.Schema({
  leagueId: String,
  name: String,
  team_list: [
    {
      id: String,
      leagueId: String,
      teamname: String,
      img: String,
      url: String,
      has_preranks: String,
      managers: [
        {
          id: String,
          nickname: String,
          is_commisioner: Number,
          is_comanager: Number,
          guid: String,
          away: Boolean,
          loggedin: Boolean,
          teamId: String,
        },
      ],
      away: Boolean,
    },
  ],
  roster_positions: [
    {
      type: PositionSchema,
      default: null,
    },
  ],
  stat_categories: [
    {
      stat_id: Number,
      name: String,
      display_name: String,
      stat_modifier: Number,
      sort_order: Number,
      stat_position_types: [String],
      operator: String,
      is_only_display_stat: Number,
      decimal_points: Number,
      is_composite_stat: Number,
    },
  ],
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
      // console.log(foundLeague.positions);
      // console.log(foundLeague.team_list);
      return foundLeague;
    } catch (error) {
      console.error("Error:", error);
    }
  }

  static async getPicks(teamId) {
    try {
      // console.log("trying to get picks, teamId:", teamId);
      const foundTeam = await model.find({ teamId: teamId });
      return foundTeam;
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
