const { gql } = require("apollo-server");

const typeDef = gql`
  type Pitching {
    playerID: String
    yearID: Int
    stint: Int
    teamID: String
    lgID: String
    W: Int
    L: Int
    G: Int
    GS: Int
    CG: Int
    SHO: Int
    SV: Int
    IPouts: Int
    H: Int
    ER: Int
    HR: Int
    BB: Int
    SO: Int
    BAOpp: Float
    ERA: Float
    IBB: Int
    WP: Int
    HBP: Int
    BK: Int
    BFP: Int
    GF: Int
    R: Int
    SH: Int
    SF: Int
    GIDP: Int
  }

  extend type Query {
    allStatlines: [Pitching]
    careerStats(id: ID): [Pitching]
  }
`;

module.exports = {
  typeDef,
};
