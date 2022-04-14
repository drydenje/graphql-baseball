const { Appearance } = require("./Appearance");
const { Franchise } = require("../Franchises/Franchise");
// const { Franchise } = require("../Franchises/Franchise");

const resolvers = {
  Query: {
    // appearances: () => Appearance.all(),
    appearancesByPlayer: (obj, { id }, context, info) => {
      return Appearance.searchByPlayerID(id);
    },
  },
  Appearance: {
    team: ({ teamID }, arg, context, info) => {
      // team: (obj, arg, context, info) => {
      // "ARI"
      console.log("Franchise Obj:");
      console.log(teamID);
      return Franchise.searchByID(teamID);
      // return {
      //   _id: "623a2d219604c61c826431fe",
      //   franchID: "ALT",
      //   franchName: "Altoona Mountain City",
      //   active: "N",
      // };
    },
  },
};

module.exports = {
  resolvers,
};
