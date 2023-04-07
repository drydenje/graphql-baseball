const { Player } = require("./Player");
const { Pitching } = require("../Pitching/Pitching");
const { Batting } = require("../Batting/Batting");

const resolvers = {
  Query: {
    players: () => Player.all(),
    playerByID: (obj, { id, limit }, context, info) => {
      return Player.searchByID(id, limit);
    },
  },
  Player: {
    basicPitchingStats: ({ playerID }, arg, context, info) => {
      return Pitching.searchByPlayerID(playerID);
    },
    basicBattingStats: ({ playerID, limit }, arg, context, info) => {
      return Batting.searchByPlayerID(playerID, limit);
    },
  },
};

module.exports = {
  resolvers,
};
