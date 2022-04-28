const { gql } = require("apollo-server");

const typeDef = gql`
  type Pick {
    id: ID
    playerId: ID
    teamId: ID
    leagueId: ID
    pos: String
    cost: Int
  }

  extend type Query {
    picks: [Pick]
    getPickById(id: ID): Pick
    listTeam(teamId: ID): [Pick]
  }

  # type Mutation {
  #   addPick():
  # }
`;
