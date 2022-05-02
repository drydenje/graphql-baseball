const { Player } = require("./Player");
const { Pitching } = require("../Pitching/Pitching");
const { Batting } = require("../Batting/Batting");

const resolvers = {
  Query: {
    players: () => Player.all(),
    playerByID: (obj, { id }, context, info) => {
      return Player.searchByID(id);
    },
  },
  Player: {
    basicPitchingStats: ({ playerID }, arg, context, info) => {
      return Pitching.searchByPlayerID(playerID);
    },
    basicBattingStats: ({ playerID }, arg, context, info) => {
      return Batting.searchByPlayerID(playerID);
    },
  },
};

module.exports = {
  resolvers,
};
