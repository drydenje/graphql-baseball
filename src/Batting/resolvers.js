const { Batting } = require("./Batting");

const resolvers = {
  Query: {
    careerStats: (obj, { id }, context, info) => {
      return Batting.searchByPlayerID(id);
    },
  },
};

module.exports = {
  resolvers,
};
