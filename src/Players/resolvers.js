const { Player } = require("./Player");
const { Pitching } = require("../Pitching/Pitching");
const { Batting } = require("../Batting/Batting");

const resolvers = {
  Query: {
    players: () => Player.all(),
    playerByID: (obj, { id, limit, sort }, context, info) => {
      return Player.searchByID(id, limit, sort);
    },
  },
  Player: {
    basicPitchingStats: ({ playerID }, arg, context, info) => {
      return Pitching.searchByPlayerID(playerID);
    },
    basicBattingStats: (obj, arg, context, info) => {
      const { playerID, limit, teamID } = obj;
      console.log("obj:", obj);
      return Batting.searchByPlayerID(playerID, limit, teamID);
    },
  },
};

module.exports = {
  resolvers,
};
