const { Park } = require("./Park");

const resolvers = {
  Query: {
    parks: () => Park.all(),
  },
};

module.exports = {
  resolvers,
};
