import gql from "graphql-tag";

const typeDef = gql`
  "A park is the physical building a franchise plays it's games in."
  type Park {
    "The unique key of the park"
    key: String
    "The name of the park"
    name: String
    "The city where the park is located"
    city: String
    "The state (or province) where the park is located"
    state: String
    "The country where the park is located"
    country: String
  }

  extend type Query {
    "A list of all of the parks."
    parks: [Park]
    "A single park searched for by its ID."
    park(key: ID): Park
    "An array of parks, seached by Name."
    parksByName(name: String): [Park]
    "An array of parks, within a city."
    parksByCity(city: String): [Park]
    "An array of parks, within a state."
    parksByState(state: String): [Park]
    "An array of parks, within a country."
    parksByCountry(country: String): [Park]
  }
`;

export default typeDef;
