const express = require("express");
const Post = require("../models/post.model");
const Comment = require("../models/comment.model");
const CRUDController = require("./CRUD.controller");
const router = express.Router();

//create post
router.post("/", CRUDController.post(Post));

//get all the post
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("user_id")
      // .populate("tag_ids")
      .lean()
      .exec(); // lean is convert object to json data and find is not returning the proper promis so to convert it to proper promise we use exec()
    res.status(200).send({ posts });
  } catch (err) {
    res.status(400).json({ status: "error in get", message: err.message });
  }
});

//get single post
router.get("/:id", async (req, res) => {
  try {
    const posts = await Post.findById(req.params.id)
      .populate("user_id")
      .populate("tag_ids")
      .lean()
      .exec();

    res.status(200).json({ posts });
  } catch (err) {
    res.status(400).json({ status: "error in get", message: err.message });
  }
});

//update a single post
router.patch("/:id", CRUDController.update(Post));

//delete a single post
router.delete("/:id", CRUDController.deleteOne(Post));

//get all coments of the post
router.get("/:id/comments", async (req, res) => {
  try {
    const comments = await Comment.find({ post_id: req.params.id })
      .lean()
      .exec();
    const post = await Post.find(req.params.id).lean().exec();

    res.status(200).send({ comments });
  } catch (err) {
    res.status(400).json({ status: "error in get", message: err.message });
  }
});

module.exports = router;
