const { Batting } = require("./Batting");

const resolvers = {
  Query: {
    // allStatlines: (obj, arg, context, info) => Batting.all(),
    careerStats: (obj, { id }, context, info) => {
      return Batting.searchByPlayerID(id);
    },

    // This is used to find the stats for last year for each player on a specified team
    // Should be used in conjunction with Players model
    lastYearsStats: (obj, { id }, context, info) => {
      return Batting.searchByTeam(id);
    },
  },
};

module.exports = {
  resolvers,
};
