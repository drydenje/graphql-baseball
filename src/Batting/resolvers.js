const { Batting } = require("./Batting");

const resolvers = {
  Query: {
    // allStatlines: (obj, arg, context, info) => Batting.all(),
    careerStats: (obj, { id, limit, sort }, context, info) => {
      return Batting.searchByPlayerID(id, limit, sort);
    },
  },
};

module.exports = {
  resolvers,
};
