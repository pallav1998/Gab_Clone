const express = require("express");
const Comment = require("../models/comment.model");
const CRUDController = require("./CRUD.controller");
const router = express.Router();

//create comments
router.post("/", CRUDController.post(Comment));

//get all the comments
router.get("/", CRUDController.get(Comment));

//get a single comment
router.get("/:id", async (req, res) => {
  try {
    const comments = await Comment.findById(req.params.id)
      .populate("post_id")
      .lean()
      .exec();

    res.status(200).json({ comments });
  } catch (err) {
    res.status(400).json({ status: "error in get", message: err.message });
  }
});

//update a single comment
router.patch("/:id", CRUDController.update(Comment));

//delete a single post
router.delete("/:id", CRUDController.deleteOne(Comment));

module.exports = router;
