const { gql } = require("apollo-server");

const typeDef = gql`
  type Batting {
    playerID: String
    yearID: Int
    stint: Int
    teamID: String
    lgID: String
    iG: Int
    iAB: Int
    iR: Int
    iH: Int
    i2B: Int
    i3B: Int
    iHR: Int
    iRBI: Int
    iSB: Int
    iCS: Int
    iBB: Int
    iSO: Int
    iIBB: Int
    iHBP: Int
    iSH: Int
    iSF: Int
    iGIDP: Int
  }

  extend type Query {
    # allStatlines: [Batting]
    careerStats(id: ID, limit: Int): [Batting]
    lastYearsStats(id: ID): [Batting]
  }
`;

module.exports = {
  typeDef,
};
