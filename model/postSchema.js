const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  postTitle: {
    type: String,
    required: true,
  },
  postDescription: {
    type: String,
    required: true,
  },
  postContent: {
    type: String,
    requird: true,
  },
});

const Posts = new mongoose.model("posts", postSchema);

module.exports = Posts;
