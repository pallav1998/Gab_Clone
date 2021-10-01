const mongoose = require("mongoose");

//comment model
const commentSchema = new mongoose.Schema(
  {
    body: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Comment = mongoose.model("comment", commentSchema);

module.exports = Comment;
