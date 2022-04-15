const { Appearance } = require("./Appearance");
const { Franchise } = require("../Franchises/Franchise");

const resolvers = {
  Query: {
    // appearances: () => Appearance.all(),
    appearancesByPlayer: (obj, { id }, context, info) => {
      return Appearance.searchByPlayerID(id);
    },
  },
  Appearance: {
    team: ({ teamID }, arg, context, info) => {
      return Franchise.searchByID(teamID);
    },
  },
};

module.exports = {
  resolvers,
};
