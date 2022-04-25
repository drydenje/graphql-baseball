const { League } = require("./League");

const resolvers = {
  Query: {
    leagues: () => League.all(),
    getLeague: (obj, { id }, context, info) => {
      return League.getLeague(id);
    },
  },
  // Mutation: {
  //   addLeague: (obj, { id, name, teams, positions, stats }, context, info) => {
  //     return "worked";
  //   },
  // },
};

module.exports = {
  resolvers,
};
