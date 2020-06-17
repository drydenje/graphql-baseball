const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  enum Status {
    TARGETED
    INTERESTED
    FLYER
    INJURY_FLYER
    AVOID
    PROSPECT
    UNDECIDED
  }

  type Player {
    id: ID!
    team: Team
    name: String!
    birthDate: String
  }

  type Team {
    id: ID!
    city: String!
    name: String!
  }

  type Query {
    players: [Player]
    player(id: ID): Player
  }

  input PlayerInput {
    id: ID
    name: String
    birthDate: String
    team: ID
  }

  input TeamInput {
    id: ID
    city: String
    name: PlayerInput
  }

  type Mutation {
    addPlayer(player: PlayerInput): [Player]
  }
`;

let players = [
  {
    name: "Mike Trout",
    team: "anaheim",
    id: "1",
    birthDate: "10-10-1983",
  },
  {
    name: "Mookie Betts",
    team: "boston",
    id: "2",
    birthDate: "10-10-1985",
  },
];

const teams = [
  {
    id: "boston",
    city: "Boston",
    name: "Red Sox",
  },
  {
    id: "anaheim",
    city: "Los Angeles",
    name: "Angels",
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
  Player: {
    team: (obj, arg, context) => {
      const foundTeam = teams.find((team) => {
        return team.id === obj.team;
      });
      return foundTeam;
    },
  },
  Mutation: {
    addPlayer: (obj, { player }, context) => {
      // database stuff
      const newPlayerList = [...players, player];
      // players = newPlayerList;
      // return data as expected in schema
      return newPlayerList;
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
