const mongoose = require("mongoose");

//post model
const postSchema = new mongoose.Schema(
  {
    photo_url: [{ type: String, required: false }],
    title: { type: String, required: true },
    body: { type: String, required: true },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Post = mongoose.model("post", postSchema);

module.exports = Post;
