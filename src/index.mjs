import "dotenv/config";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import gql from "graphql-tag";
import { connectDB } from "./config/db.mjs";

import appearances from "./Appearances/index.mjs";
import batting from "./Batting/index.mjs";
import franchises from "./Franchises/index.mjs";
import league from "./Leagues/index.mjs";
import lookups from "./Lookups/index.mjs";
import parks from "./Parks/index.mjs";
import picks from "./Picks/index.mjs";
import pitching from "./Pitching/index.mjs";
import players from "./Players/index.mjs";

const typeDef = gql`
  type Query
  type Mutation
`;

connectDB();

const server = new ApolloServer({
  typeDefs: [
    typeDef,
    appearances.typeDef,
    batting.typeDef,
    franchises.typeDef,
    league.typeDef,
    lookups.typeDef,
    parks.typeDef,
    picks.typeDef,
    pitching.typeDef,
    players.typeDef,
  ],
  resolvers: [
    appearances.resolvers,
    batting.resolvers,
    franchises.resolvers,
    league.resolvers,
    lookups.resolvers,
    parks.resolvers,
    picks.resolvers,
    pitching.resolvers,
    players.resolvers,
  ],
  playground: true,
});
const { url } = await startStandaloneServer(server, {
  context: async ({ req }) => ({ token: req.headers.token }),
  listen: { port: 4000 },
});

console.log(`Server ready at ${url}`);

// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", function () {
//   console.log("✅ Database connection established ✅");
// server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
//   console.log(`Server ready at ${url}`);
// });
// });
