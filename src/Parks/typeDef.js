const { gql } = require("apollo-server");

const typeDef = gql`
  type Park {
    key: String
    name: String
    city: String
    state: String
    country: String
  }

  extend type Query {
    parks: [Park]
    park(key: ID): Park
    parksByName(name: String): [Park]
    parksByCity(city: String): [Park]
    parksByState(state: String): [Park]
    parksByCountry(country: String): [Park]
  }
`;

module.exports = {
  typeDef,
};
