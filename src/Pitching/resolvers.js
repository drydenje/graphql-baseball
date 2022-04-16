const { Pitching } = require("./Pitching");

const resolvers = {
  Query: {
    careerPitchingStats: (obj, { playerID }, context, info) => {
      return Pitching.searchByPlayerID(playerID);
    },
  },
};

module.exports = {
  resolvers,
};
