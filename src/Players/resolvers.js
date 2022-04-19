const { Player } = require("./Player");
const { Pitching } = require("../Pitching/Pitching");

const resolvers = {
  Query: {
    players: () => Player.all(),
    playerByID: (obj, { id }, context, info) => {
      return Player.searchByID(id);
    },
  },
  Player: {
    basicPitchingStats: ({ playerID }, arg, context, info) => {
      console.log("ID:", playerID);
      return Pitching.searchByPlayerID(playerID);
    },
  },
};

module.exports = {
  resolvers,
};
