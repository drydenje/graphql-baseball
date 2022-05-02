const { gql } = require("apollo-server");

const typeDef = gql`
  type Lookup {
    IDPlayer: String
    PLAYERNAME: String
    team: String
    idFangraphs: String
    mlbID: String
    cbsID: String
    retroID: String
    "Baseball Reference"
    brefID: String
    nfbcID: String
    espnID: String
    davenportID: String
    bpID: String
    yahooID: String
    rotowiredID: String
    fanduelID: String
    ottoneuID: String
    hqID: String
    fantraxID: String
  }

  extend type Query {
    lookupByYahooID(id: String!): String
  }
`;

module.exports = {
  typeDef,
};
