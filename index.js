require("dotenv").config();
const { ApolloServer, gql } = require("apollo-server");

// const str = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-drs5r.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
// console.log(str);
// console.log(process.user)

const mongoose = require("mongoose");
mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-drs5r.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const db = mongoose.connection;

// console.log("process:", process.env);

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
    id: 1,
    city: "Boston",
    name: "Red Sox",
  },
  {
    id: 2,
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
      // console.log("context:", context);
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
  // any requests pass through this function
  context: ({ req }) => {
    const fakeUser = {
      userId: "helloImasuser",
    };
    return {
      ...fakeUser,
    };
  },
});

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("✅ Database connection established ✅");
  server.listen({ port: process.env.PORT || 4001 }).then(({ url }) => {
    console.log(`Server started at ${url}`);
  });
});
