const Posts = require("../model/postSchema");
const mongoose = require("mongoose");

const createPost = async (req, res) => {
  try {
    if (req.userId === req.body.userId) {
      const { userId, postTitle, postDescription, postContent } = req.body;

      const post = new Posts({
        userId,
        postContent,
        postDescription,
        postTitle,
      });
      const createdPost = await post.save();
      console.log(createdPost);

      res.json({
        message: "post created succesfully",
        createdPost,
      });
    } else {
      res.json({
        message: "You are not allowed to post",
      });
    }
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

const getPostById = async (req, res) => {
  try {
    let id = { userId: req.body.email };
    const posts = await Posts.find(id);
    res.json({
      message: "posted by the given user",
      posts,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};
module.exports = {
  createPost,
  getPostById,
};
