const { gql } = require("apollo-server");

const typeDef = gql`
  type Franchise {
    # franchID,franchName,active,NAassoc
    franchID: String
    franchName: String
    active: String
    NAassoc: String
    roster: [Player]
  }

  extend type Query {
    franchises: [Franchise]
    franchise(id: ID): Franchise
    activeFranchises: [Franchise]
    franchiseRoster(id: ID): [Player]
  }
`;

module.exports = {
  typeDef,
};
