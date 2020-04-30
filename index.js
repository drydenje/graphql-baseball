const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  enum Status {
    TARGETED
    INTERESTED
    FLYER
    INJURY_FLYER
    AVOID
    PROSPECT
  }

  type Player {
    id: ID!
    name: String!
    birthDate: String
  }

  type Query {
    players: [Player]
    player(id: ID): Player
  }

  type FantasyTeam {
    id: ID!
    name: String!
    manager: String!
    year: String!
  }
`;

const players = [
  {
    name: "Mike Trout",
    id: "1",
    birthDate: "10-10-1983",
  },
  {
    name: "Mookie Betts",
    id: "2",
    birthDate: "10-10-1985",
  },
];

const resolvers = {
  Query: {
    players: () => {
      return players;
    },
    player: (obj, { id }, context, info) => {
      const foundPlayer = players.find((player) => {
        return player.id === id;
      });
      return foundPlayer;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});

server.listen({ port: process.env.PORT || 4001 }).then(({ url }) => {
  console.log(`Server started at ${url}`);
});
