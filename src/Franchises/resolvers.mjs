import Franchise from "./Franchise.mjs";

const resolvers = {
  Query: {
    franchises: () => Franchise.all(),
    franchise: (obj, { id }, context, info) => {
      return Franchise.searchByID(id);
    },
    activeFranchises: (obj, { id }, context, info) => {
      return Franchise.activeFranchises();
    },
    adjustFranchiseTable: (obj, { id }, context, info) => {
      return Franchise.adjustFranchiseTable();
    },
    updateTeamID: (obj, { id }, context, info) => {
      return Franchise.updateTeamID();
    },
  },
  Franchise: {
    roster: ({ franchID }, arg, context, info) => {
      return Franchise.getFranchiseRoster(franchID);
    },
  },
};

export default resolvers;
