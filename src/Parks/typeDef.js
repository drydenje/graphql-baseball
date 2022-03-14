const { gql } = require("apollo-server");
const { Schema } = require("mongoose");

const typeDef = gql`
  type Park {
    # _id: String
    key: String
    name: String
    city: String
    state: String
    country: String
  }

  extend type Query {
    parks: [Park]
  }
`;

const mdbSchema = new Schema({
  key: String,
  name: String,
  city: String,
  state: String,
  country: String,
});

module.exports = {
  typeDef,
  mdbSchema,
};
