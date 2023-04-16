const { gql } = require("apollo-server");

const typeDef = gql`
  type Franchise {
    # franchID,franchName,active,NAassoc
    franchID: String
    franchName: String
    active: String
    NAassoc: String
    roster: Roster
    league: League
    division: Division
  }

  enum League {
    American
    National
  }

  enum Division {
    East
    Central
    West
  }

  type Roster {
    hitters: [Player]
    pitchers: [Player]
  }

  extend type Query {
    franchises: [Franchise]
    franchise(id: ID): Franchise
    activeFranchises: [Franchise]
  }

  # extend type Mutation {
  #   addLeagues(): Boolean
  # }
`;

module.exports = {
  typeDef,
};
