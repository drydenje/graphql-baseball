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
    addPick: (
      obj,
      { id, playerId, teamId, leagueId, pos, cost },
      context,
      info
    ) => {
      return Pick.addPick(id, playerId, teamId, leagueId, pos, cost);
    },
  },
};

module.exports = {
  resolvers,
};
