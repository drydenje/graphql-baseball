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
    // franchName: (obj, arg, context) => {
    //   console.log(obj);
    //   return {
    //     name: "test",
    //   };
    // },
  },
  Franchise: {
    franchName: (obj, arg, context, info) => {
      // "ARI"
      console.log(arg);
      // return Franchise.searchByID(obj);
      return {
        _id: { $oid: "623a2d219604c61c826431fe" },
        franchID: "ALT",
        franchName: "Altoona Mountain City",
        active: "N",
      };
    },
  },
};

module.exports = {
  resolvers,
};
