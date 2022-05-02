const { gql } = require("apollo-server");

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
    basicBattingStats: [Batting]
  }

  extend type Query {
    players: [Player]
    playerByID(id: ID): Player
  }
`;

module.exports = {
  typeDef,
};
