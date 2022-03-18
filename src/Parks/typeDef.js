const { gql } = require("apollo-server");
const { Schema } = require("mongoose");

const typeDef = gql`
  type Park {
    # _id: String
    key: String
    name: String
    city: String
    state: String
    country: String
  }

  type Query {
    parks: [Park]
    park(key: ID): Park
    parksInCity(city: String): [Park]
  }
`;

module.exports = {
  typeDef,
};
