const { gql } = require("apollo-server");

const typeDef = gql`
  type Batting {
    playerID: String
    yearID: Int
    stint: Int
    teamID: String
    lgID: String
    G: Int
    AB:Int
    R:Int
    H:Int
    2B:Int
    3B:Int
    HR:Int
    RBI:Int
    SB:Int
    CS:Int
    BB:Int
    SO:Int
    IBB:Int
    HBP:Int
    SH:Int
    SF:Int
    GIDP:Int
  }

  extend type Query {
    # statline(year: Int): 
    careerStats(id: ID): [Batting]
  }
`;

module.exports = {
  typeDef,
};
