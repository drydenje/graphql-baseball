import Pitching from "./Pitching.mjs";

const resolvers = {
  Query: {
    careerPitchingStats: (obj, { playerID }, context, info) => {
      return Pitching.searchByPlayerID(playerID);
    },
  },
};

export default resolvers;
