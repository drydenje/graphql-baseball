const { ApolloServer, gql } = require("apollo-server");
const players = require("./Players");

const typeDef = gql`
  type Query
`;

const server = new ApolloServer({
  typeDefs: [typeDef, players.typeDef],
  resolvers: [players.resolvers],
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
