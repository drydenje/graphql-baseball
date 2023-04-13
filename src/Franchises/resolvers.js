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
  },
  Franchise: {
    roster: ({ franchID }, arg, context, info) => {
      return Franchise.getFranchiseRoster(franchID);
    },
  },
};

module.exports = {
  resolvers,
};
