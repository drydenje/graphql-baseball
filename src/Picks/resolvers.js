const { Pick } = require("./Pick");
const { Player } = require("../Players/Player");

const resolvers = {
  Query: {
    picks: () => Pick.all(),
    getPickById: (obj, { id }, context, info) => {
      return Pick.searchById(id);
    },
    listTeam: (obj, { id }, context, info) => {
      return Pick.listTeam(teamId);
    },
  },
  Pick: {
    player: ({ playerId }, args, context, info) => {
      return Player.searchByID(playerId);
    },
  },
  Mutation: {
    addPick: (obj, args, context, info) => {
      console.log(args);
      return Pick.addPick(pick);
    },
  },
};

module.exports = {
  resolvers,
};
