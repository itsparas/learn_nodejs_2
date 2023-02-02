const jwt = require("jsonwebtoken");
require("dotenv").config();

const authorization = async (req, res, next) => {
  const token = req.header("Authorization");
  const onlytoken = token.replace("Bearer ", "");
  console.log(onlytoken);
  const key = process.env.KEY;

  jwt.verify(onlytoken, key, (err, decoded) => {
    if (!err) {
      req.id = decoded?.id;
      next();
    } else {
      res.json({
        message: err.message,
      });
    }
  });
};

module.exports = authorization;
