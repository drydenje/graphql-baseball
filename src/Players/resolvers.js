const { Player } = require("./Player");

const resolvers = {
  Query: {
    players: () => Player.all(),
  },
};

module.exports = {
  resolvers,
};
