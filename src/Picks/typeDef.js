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

  extend type Mutation {
    addPick(
      id: ID
      playerId: String
      teamId: String
      leagueId: String
      pos: String
      cost: Int
    ): Pick
  }
`;

module.exports = {
  typeDef,
};
