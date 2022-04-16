const { Batting } = require("./Batting");

const resolvers = {
  Query: {
    allStatlines: (obj, arg, context, info) => Batting.all(),
    careerStats: (obj, { id }, context, info) => {
      return Batting.searchByPlayerID(id);
    },
  },
};

module.exports = {
  resolvers,
};
