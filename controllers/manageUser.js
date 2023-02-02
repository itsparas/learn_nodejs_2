const User = require("../model/userSchema");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
require("dotenv").config();

const createUser = async (req, res) => {
  const { email, password, firstName, lastName, gender, age } = req.body;
  const saltRound = process.env.SALTROUND;
  const hashedPassword = await bcrypt.hash(password, Number(saltRound));
  const user = new User({
    email,
    password: hashedPassword,
    firstName,
    lastName,
    age,
    gender,
  });
  user
    .save()
    .then((data) => {
      res.json({
        data,
      });
    })
    .catch((err) => {
      res.json({
        message: err.message,
      });
    });
};

const getAllUser = async (req, res) => {
  try {
    let users = await User.find();
    res.json({
      message: "all the users",
      users,
    });
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
};

const getUser = async (req, res) => {
  try {
    const id = req.body.id || req.id;
    const userId = mongoose.Types.ObjectId(id);
    let user = await User.findOne(userId).select("-password");
    res.json({
      message: "requested user",
      user,
    });
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
};
const updateUser = async (req, res) => {
  try {
    const userId = mongoose.Types.ObjectId(req.body.id);
    const { email, firstName, lastName, age, gender } = req.body;

    let user = await User.findOne(userId);

    user.email = email ? email : user.email;
    user.firstName = firstName ? firstName : user.firstName;
    user.lastName = lastName ? lastName : user.lastName;
    user.age = age ? age : user.age;
    user.gender = gender || user.gender;

    let updatedUser = await user.save();

    res.json({
      message: "Updated user",
      updatedUser,
    });
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = mongoose.Types.ObjectId(req.body.id);
    let deletedUser = await User.deleteOne(userId);
    res.json({
      deletedUser,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};
module.exports = {
  createUser,
  getAllUser,
  getUser,
  updateUser,
  deleteUser,
};
