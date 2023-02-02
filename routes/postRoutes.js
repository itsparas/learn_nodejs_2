const express = require("express");
const router = express.Router();

const { createPost, getPostById } = require("../controllers/managePost");

router.post("/createpost", createPost);
router.post("/getpostbyid", getPostById);

module.exports = router;
