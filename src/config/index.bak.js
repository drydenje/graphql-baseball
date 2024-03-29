require("dotenv").config();
const { ApolloServer, gql } = require("apollo-server");

const mongoose = require("mongoose");
mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-drs5r.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const db = mongoose.connection;

const playerSchema = new mongoose.Schema({
  teamId: String,
  name: String,
  birthDate: Date,
  status: String,
});
reactsecurity;
CUx2UANPWtvoadyV;
const Player = mongoose.model("Player", playerSchema);

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
      // const newPlayerList = [...players, player];
      // players = newPlayerList;
      console.log("Player:", player);
      const newPlayer = Player.create({
        ...player,
      });
      // return data as expected in schema
      return [newPlayer];
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
