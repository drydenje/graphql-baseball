const { data } = require("./data");
const { Park } = require("./Park");
const { resolvers } = require("./resolvers");
const { typeDef } = require("./typeDef");
const { model } = require("./models");

module.exports = {
  data,
  Park,
  resolvers,
  typeDef,
  // model,
};
