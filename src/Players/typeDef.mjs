import gql from "graphql-tag";

const typeDef = gql`
  type Player {
    playerID: String
    birthYear: Int
    birthMonth: Int
    birthDay: Int
    birthCountry: String
    birthState: String
    birthCity: String
    nameFirst: String
    nameLast: String
    nameGiven: String
    weight: Int
    height: Int
    bats: String
    throws: String
    debut: String
    finalGame: String
    retroID: String
    bbrefID: String
    deathYear: Int
    deathMonth: Int
    deathDay: Int
    deathCountry: String
    deathState: String
    deathCity: String
    basicPitchingStats: [Pitching]
    basicBattingStats(limit: Int): [Batting]
  }

  extend type Query {
    players: [Player]
    playerByID(id: ID): Player
  }
`;

export default typeDef;
