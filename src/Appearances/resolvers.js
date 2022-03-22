const { Appearance } = require("./Appearance");

const resolvers = {
  Query: {
    // appearances: () => Appearance.all(),
    appearancesByPlayer: (obj, { id }, context, info) => {
      return Appearance.searchByPlayerID(id);
    },
  },
};

module.exports = {
  resolvers,
};
