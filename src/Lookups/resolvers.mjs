import Lookup from "./Lookup.mjs";

const resolvers = {
  Query: {
    lookupByYahooID: (obj, { id }, context, info) => {
      return Lookup.lookupByYahooID(id);
    },
  },
};

export default resolvers;
