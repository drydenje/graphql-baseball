const { League } = require("./League");

const resolvers = {
  Query: {
    getLeague: (obj, { id }, context, info) => {
      return Leauge.getLeague(id);
    },
  },
};

module.exports = {
  resolvers,
};
