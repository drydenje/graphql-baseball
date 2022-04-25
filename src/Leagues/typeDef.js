const { gql } = require("apollo-server");

const typeDef = gql`
  type League {
    leagueId: ID
    name: String
    teams: [Team]
    rosterPositions: [RosterPosition]
    statCategories: [Stat]
  }

  type Team {
    id: ID
    name: String
    img: String
    url: String
    managers: [Manager]
  }

  type Manager {
    id: ID
    nickname: String
    is_commissioner: Int
    teamID: ID
  }

  type RosterPosition {
    position: String
    positionType: String
    count: Int
  }

  # type Pick {
  #   id: ID
  #   playerID: String
  #   teamID: String
  #   pos: String
  #   cost: Int
  # }

  type Stat {
    id: ID
    name: String
    displayName: String
    modifier: Float
    sortOrder: Int
    positionTypes: [String]
    operator: String
    decimalPoints: Int
    isCompositeStat: Int
  }

  extend type Query {
    leagues: [League]
    getLeague(id: ID): League
    # getLeague(leagueID: ID): String
  }

  # type Mutation {
  #   addLeague(): League
  # }
`;

module.exports = {
  typeDef,
};
