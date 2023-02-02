const User = require("../model/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  const key = process.env.KEY;
  bcrypt.compare(password, user.password, (err, result) => {
    if (result) {
      jwt.sign({ email, password, id: user._id }, key, function (err, token) {
        if (token) {
          res.json({
            token,
          });
        } else {
          res.json({
            message: err.message,
          });
        }
      });
    }
  });
};

module.exports = login;
