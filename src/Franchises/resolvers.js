const { Franchise } = require("./Franchise");

const resolvers = {
  Query: {
    franchises: () => Franchise.all(),
    franchise: (obj, { id }, context, info) => {
      return Franchise.searchByID(id);
    },
    activeFranchises: (obj, { id }, context, info) => {
      return Franchise.activeFranchises();
    },
    franchiseRoster: (obj, { id }, context, info) => {
      return Franchise.getFranchiseRoster(id);
    },
    // franchName: (obj, arg, context) => {
    //   console.log(obj);
    //   return {
    //     name: "test",
    //   };
    // },
  },
};

module.exports = {
  resolvers,
};
