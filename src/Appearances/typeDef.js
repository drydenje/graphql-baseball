const { gql } = require("apollo-server");

const typeDef = gql`
  type Appearance {
    yearID: Int
    teamID: String
    team: Franchise
    lgID: String #leagueID
    playerID: String
    G_all: Int
    GS: Int #games started
    G_batting: Int
    G_defense: Int
    G_p: Int
    G_c: Int
    G_1b: Int
    G_2b: Int
    G_3b: Int
    G_ss: Int
    G_lf: Int
    G_cf: Int
    G_rf: Int
    G_of: Int
    G_dh: Int
    G_ph: Int
    G_pr: Int
  }

  extend type Query {
    # appearances: [Appearance]
    appearancesByPlayer(id: ID): [Appearance]
    team(id: ID): Franchise
  }
`;

module.exports = {
  typeDef,
};
