import gql from "graphql-tag";

const typeDef = gql`
  type Pick {
    id: ID
    player: Player
    teamId: ID
    leagueId: ID
    pos: String
    cost: Int
  }

  extend type Query {
    picks: [Pick]
    player(playerId: ID): Player
    getPickById(id: ID): Pick
    listTeam(teamId: ID): [Pick]
  }

  input PickInput {
    id: ID
    playerId: String
    teamId: ID
    leagueId: ID
    pos: String
    cost: Int
  }

  extend type Mutation {
    # addPick(pick: PickInput): Pick
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

export default typeDef;
