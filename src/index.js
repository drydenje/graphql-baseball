const { ApolloServer, gql } = require("apollo-server");
const players = require("./Players");
const parks = require("./Parks");

const typeDef = gql`
  type Query
`;

const server = new ApolloServer({
  typeDefs: [typeDef, players.typeDef, parks.typeDef],
  resolvers: [players.resolvers, parks.resolvers],
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
