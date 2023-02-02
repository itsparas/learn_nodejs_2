const mongoose = require("mongoose");
require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;

const connectDatabase = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("db is connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDatabase;
