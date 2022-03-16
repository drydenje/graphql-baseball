const { Park } = require("./Park");

const resolvers = {
  Query: {
    parks: () => Park.all(),
    // obj, args, context, info
    park: (obj, { key }, context, info) => {
      return Park.byKey(key);
    },
  },
};

module.exports = {
  resolvers,
};
