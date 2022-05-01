const { gql } = require("apollo-server");

const typeDef = gql`
  type League {
    leagueId: ID
    name: String
    team_list: [Team]
    roster_positions: [RosterPosition]
    stat_categories: [Stat]
  }

  type Team {
    id: ID
    teamname: String
    img: String
    url: String
    managers: [Manager]
    picks: [Pick]
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

  type Stat {
    stat_id: ID
    name: String
    display_name: String
    stat_modifier: Float
    sort_order: Int
    stat_position_types: [String]
    operator: String
    decimal_points: Int
    is_composite_stat: Int
  }

  extend type Query {
    leagues: [League]
    getLeague(id: ID): League
  }

  # type Mutation {
  #   addLeague(): League
  # }
`;

module.exports = {
  typeDef,
};
