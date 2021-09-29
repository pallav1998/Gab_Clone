const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    photo_url: [{ type: String, required: false }],
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    password: { type: String, required: true },
    gender: { type: String, required: false },
    email: { type: String, required: true },
    age: { type: Number, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const User = mongoose.model("user", UserSchema);

module.exports = User;
