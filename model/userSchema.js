const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: "String",
    required: true,
    unique: true,
  },
  password: {
    type: "String",
    required: true,
  },
  firstName: {
    type: "String",
    required: true,
  },
  lastName: {
    type: "String",
    required: true,
  },
  age: {
    type: "String",
    required: true,
  },
  gender: {
    type: "String",
    enum: ["MALE", "FEMALE", "OTHER"],
    required: true,
  },
});

const User = new mongoose.model("User", userSchema);

module.exports = User;
