const express = require("express");
const User = require("../models/user.model");
require("../config/db");
const bcrypt = require("bcryptjs");
const router = express.Router();
router.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(422).json({ error: "You cant empty the faild" });
    }

    const userLogin = await User.findOne({ email: email });
    const isMatch = await bcrypt.compare(password, userLogin.password);
    if (!isMatch) {
      res.status(422).json({error:"Please Enter Coreect Username or password"});
    } else {
      res.json({ message: "user Login success" });
    }
  } catch (err) {
    console.log(err, "err");
  }
});


module.exports = router;