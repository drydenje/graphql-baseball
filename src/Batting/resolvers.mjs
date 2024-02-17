import Batting from "./Batting.mjs";

const resolvers = {
  Query: {
    // allStatlines: (obj, arg, context, info) => Batting.all(),
    careerStats: (obj, { id, limit, sort }, context, info) => {
      return Batting.searchByPlayerID(id, limit, sort);
    },
  },
};

export default resolvers;
