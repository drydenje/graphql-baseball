require("dotenv").config();
const { ApolloServer, gql } = require("apollo-server");
const connectDB = require("./config/db");
const appearances = require("./Appearances");
const batting = require("./Batting");
const franchises = require("./Franchises");
const lookups = require("./Lookups");
const parks = require("./Parks");
const pitching = require("./Pitching");
const players = require("./Players");

const typeDef = gql`
  type Query
`;

connectDB();

const server = new ApolloServer({
  typeDefs: [
    typeDef,
    appearances.typeDef,
    batting.typeDef,
    franchises.typeDef,
    lookups.typeDef,
    parks.typeDef,
    pitching.typeDef,
    players.typeDef,
  ],
  resolvers: [
    appearances.resolvers,
    batting.resolvers,
    franchises.resolvers,
    lookups.resolvers,
    parks.resolvers,
    pitching.resolvers,
    players.resolvers,
  ],
  playground: true,
});

// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", function () {
//   console.log("✅ Database connection established ✅");
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
// });
