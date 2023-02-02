const express = require("express");
const router = express.Router();
const {
  createUser,
  getAllUser,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/manageUser");
const login = require("../controllers/loginUser");
const authorization = require("../middleware/authorization");

router.post("/register", createUser);
router.get("/alluser", authorization, getAllUser);
router.post("/getuser", authorization, getUser);
router.post("/updateuser", updateUser);
router.post("/deleteuser", deleteUser);
router.post("/login", login);

module.exports = router;
