const { gql } = require("apollo-server");

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
    parksByName(name: String): [Park]
    parksByCity(city: String): [Park]
    parksByState(state: String): [Park]
    parksByCountry(country: String): [Park]
  }
`;

module.exports = {
  typeDef,
};
