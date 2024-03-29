import League from "./League.mjs";
import Pick from "../Picks/Pick.mjs";

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
    // picks: ({ id, leagueId, teamname }, arg, context, info) => {
    picks: ({ id, leagueId }, args, context, info) => {
      // console.log("teamID:", id);
      // console.log(obj);
      return Pick.listTeam(id, leagueId);
    },
  },
};

export default resolvers;
