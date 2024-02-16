import Player from "./Player.mjs";

// type 'Pitching' not defined in schema?
import Pitching from "../Pitching/Pitching.mjs";
import Batting from "../Batting/index.mjs";

const resolvers = {
  Query: {
    players: () => Player.all(),
    playerByID: (obj, { id, limit, sort }, context, info) => {
      return Player.searchByID(id, limit, sort);
    },
  },
  Player: {
    // basicPitchingStats: ({ playerID }, arg, context, info) => {
    //   return Pitching.searchByPlayerID(playerID);
    // },
    // basicBattingStats: (obj, arg, context, info) => {
    //   const { playerID, limit, teamID } = obj;
    //   return Batting.searchByPlayerID(playerID, limit, teamID);
    // },
  },
};

export default resolvers;
