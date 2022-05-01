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
  Team: {
    picks: ({ id, leagueId, teamname }, arg, context, info) => {
      console.log(id, leagueId, teamname);
      // return League.getPicks(teamId);
    },
  },
};

module.exports = {
  resolvers,
};
