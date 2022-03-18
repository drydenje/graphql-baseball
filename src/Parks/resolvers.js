const { Park } = require("./Park");

const resolvers = {
  Query: {
    parks: () => Park.all(),
    // obj, args, context, info
    park: (obj, { key }, context, info) => {
      return Park.searchByKey(key);
    },
    parksInCity: (obj, { city }, context, info) => {
      return Park.searchByCity(city);
    },
  },
};

module.exports = {
  resolvers,
};
