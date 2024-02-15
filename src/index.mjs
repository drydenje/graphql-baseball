// require("dotenv").config();
import "dotenv/config";
// const { ApolloServer, gql } = require("apollo-server");
import { ApolloServer } from "@apollo/server";
import { gql } from "graphql-tag";
import connectDB from "./config/db.mjs";
// import { appearances } from "./Appearances";
// import { batting } from "./Batting";
// import { franchises } from "./Franchises";
// import { league } from "./Leagues";
// import { lookups } from "./Lookups";
import Parks from "./Parks/index.mjs";
// import { picks } from "./Picks";
// import { pitching } from "./Pitching";
// import { players } from "./Players";

const typeDef = gql`
  type Query
  type Mutation
`;

connectDB();

const server = new ApolloServer({
  typeDefs: [typeDef, Parks.typeDef],
  resolvers: [Parks.resolvers],
  playground: true,
});

// /*
// const server = new ApolloServer({
//   typeDefs: [
//     typeDef,
//     appearances.typeDef,
//     batting.typeDef,
//     franchises.typeDef,
//     league.typeDef,
//     lookups.typeDef,
//     parks.typeDef,
//     picks.typeDef,
//     pitching.typeDef,
//     players.typeDef,
//   ],
//   resolvers: [
//     appearances.resolvers,
//     batting.resolvers,
//     franchises.resolvers,
//     league.resolvers,
//     lookups.resolvers,
//     parks.resolvers,
//     picks.resolvers,
//     pitching.resolvers,
//     players.resolvers,
//   ],
//   playground: true,
// });
// */

// // db.on("error", console.error.bind(console, "connection error:"));
// // db.once("open", function () {
// //   console.log("✅ Database connection established ✅");
// server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
//   console.log(`Server ready at ${url}`);
// });
// // });
