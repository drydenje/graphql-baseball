const { Pick } = require("./Pick");

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
};

module.exports = {
  resolvers,
};
