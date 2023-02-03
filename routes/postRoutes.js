const express = require("express");
const router = express.Router();
const authorization = require("../middleware/authorization");
const { createPost, getPostById } = require("../controllers/managePost");

router.post("/createpost", authorization, createPost);
router.post("/getpostbyid", getPostById);

module.exports = router;
