import Appearance from "./Appearance.mjs";
import Franchise from "../Franchises/Franchise.mjs";

const resolvers = {
  Query: {
    // appearances: () => Appearance.all(),
    appearancesByPlayer: (obj, { id }, context, info) => {
      return Appearance.searchByPlayerID(id);
    },
  },
  Appearance: {
    team: ({ teamID }, arg, context, info) => {
      return Franchise.searchByID(teamID);
    },
  },
};

export default resolvers;
