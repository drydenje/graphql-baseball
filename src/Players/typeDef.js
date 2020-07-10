const { gql } = require("apollo-server");

const typeDef = gql`
  type Player {
    name: String
    team: String
    id: Int
    birthDate: String
  }

  extend type Query {
    players: [Player]
  }
`;

module.exports = {
  typeDef,
};
