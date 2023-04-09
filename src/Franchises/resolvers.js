const { Franchise } = require("./Franchise");
const { Batting } = require("../Batting/Batting");

const resolvers = {
  Query: {
    franchises: () => Franchise.all(),
    franchise: (obj, { id }, context, info) => {
      return Franchise.searchByID(id);
    },
    activeFranchises: (obj, { id }, context, info) => {
      return Franchise.activeFranchises();
    },
    // franchiseRoster: (obj, { id }, context, info) => {
    //   return Franchise.getFranchiseRoster(id);
    // },
    // franchName: (obj, arg, context) => {
    //   console.log(obj);
    //   return {
    //     name: "test",
    //   };
    // },
  },
  Franchise: {
    roster: ({ franchID }, arg, context, info) => {
      return Batting.getTeamRoster(franchID);
    },
  },
};

module.exports = {
  resolvers,
};
