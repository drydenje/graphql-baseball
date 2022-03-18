const { Park } = require("./Park");

const resolvers = {
  Query: {
    parks: () => Park.all(),
    // obj, args, context, info
    park: (obj, { key }, context, info) => {
      return Park.searchByKey(key);
    },
    parksByName: (obj, { name }, context, info) => {
      return Park.searchByName(name);
    },
    parksByCity: (obj, { city }, context, info) => {
      return Park.searchByCity(city);
    },
    parksByState: (obj, { state }, context, info) => {
      return Park.searchByState(state);
    },
    parksByCountry: (obj, { country }, context, info) => {
      return Park.searchByCountry(country);
    },
  },
};

module.exports = {
  resolvers,
};
