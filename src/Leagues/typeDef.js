const { gql } = require("apollo-server");

const typeDef = gql`
  type League {

  }

  extend type Query {

  }
`;

module.exports = {
  typeDef,
};

const league = {
  leagueID,
  teams: [],
  roster_positions: [
    {
      position: "C",
      position_type: "B",
      count: 1,
    },
    {
      position: "1B",
      position_type: "B",
      count: 1,
    },
    {
      position: "2B",
      position_type: "B",
      count: 1,
    },
    {
      position: "3B",
      position_type: "B",
      count: 1,
    },
    {
      position: "SS",
      position_type: "B",
      count: 1,
    },
    {
      position: "OF",
      position_type: "B",
      count: 3,
    },
    {
      position: "Util",
      position_type: "B",
      count: 2,
    },
    {
      position: "SP",
      position_type: "P",
      count: 2,
    },
    {
      position: "RP",
      position_type: "P",
      count: 2,
    },
    {
      position: "P",
      position_type: "P",
      count: 4,
    },
    {
      position: "BN",
      position_type: "BN",
      count: 5,
    },
  ],
};
