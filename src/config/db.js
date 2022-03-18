require("dotenv").config();

const mongoose = require("mongoose");
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const connectDB = () => {
  return mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0-drs5r.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (error) => {
      if (error) {
        console.error("Connection to DB failed");
      } else {
        console.log("✅ Database connection established ✅");
      }
    }
  );
};

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection failed"));

module.exports = connectDB;
