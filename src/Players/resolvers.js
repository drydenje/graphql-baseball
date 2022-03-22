const { Player } = require("./Player");

const resolvers = {
  Query: {
    players: () => Player.all(),
    playerByID: (obj, { id }, context, info) => {
      return Player.searchByID(id);
    },
  },
};

module.exports = {
  resolvers,
};
