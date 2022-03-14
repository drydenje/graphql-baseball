require("dotenv").config();
const { ApolloServer, gql } = require("apollo-server");
const players = require("./Players");
const parks = require("./Parks");
const mongoose = require("mongoose");
const { Schema } = require("mongoose");
mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-drs5r.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const db = mongoose.connection;
// console.log(parks.mdbSchema);

// This is returning 'undefined', not sure why. It console.logs fine in typeDef.js
// console.log(parks.mdbSchema);

// const Park = mongoose.model("Park", parks.mdbSchema);

const typeDef = gql`
  type Query
`;

const server = new ApolloServer({
  typeDefs: [typeDef, players.typeDef, parks.typeDef],
  resolvers: [players.resolvers, parks.resolvers],
  playground: true,
});

// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", function () {
//   console.log("✅ Database connection established ✅");
//   server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
//     console.log(`Server ready at ${url}`);
//   });
// });
