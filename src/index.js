const { ApolloServer, gql } = require("apollo-server");
const players = require("./Players");
const parks = require("./Parks");

const typeDef = gql`
  type Query
`;

const server = new ApolloServer({
  typeDefs: [typeDef, players.typeDef, parks.typeDef],
  resolvers: [players.resolvers, parks.resolvers],
  playground: true,
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
