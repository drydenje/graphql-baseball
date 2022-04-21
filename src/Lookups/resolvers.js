const { Lookup } = require("./Lookup");

const resolvers = {
  Query: {
    lookupByYahooID: (obj, { id }, context, info) => {
      return Lookup.lookupByYahooID(id);
    },
  },
};

module.exports = {
  resolvers,
};
