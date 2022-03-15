require("dotenv").config();
const { ApolloServer, gql } = require("apollo-server");
const connectDB = require("./config/db");
const players = require("./Players");
const parks = require("./Parks");

// console.log(parks.model);

const typeDef = gql`
  type Query
`;

connectDB();

const server = new ApolloServer({
  typeDefs: [typeDef, players.typeDef, parks.typeDef],
  resolvers: [players.resolvers, parks.resolvers],
  playground: true,
});

// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", function () {
//   console.log("✅ Database connection established ✅");
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
// });
