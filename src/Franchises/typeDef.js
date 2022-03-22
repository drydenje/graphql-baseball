const { gql } = require("apollo-server");

const typeDef = gql`
  type Franchise {
    # franchID,franchName,active,NAassoc
    franchID: String
    franchName: String
    active: String
    NAassoc: String
  }

  extend type Query {
    franchises: [Franchise]
    franchise(key: ID): Franchise
    activeFranchises: [Franchise]
  }
`;

module.exports = {
  typeDef,
};