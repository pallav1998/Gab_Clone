const express = require("express");
const router = express.Router();
const User = require("../models/user.model");
const upload = require("../utlis/fileUploads");
const CRUDController = require("./CRUD.controller");

//uploads file
router.post("/", upload.any("userImage"), async (req, res) => {
  // console.log(req.file);
  const files = req.files.map((file) => file.path);

  const user = await User.create({
    photo_url: files,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    password: req.body.password,
    gender: req.body.gender,
    email: req.body.email,
    age: req.body.age,
  });

  return res.status(201).json({ data: user });
});

//create one user
router.post("/", CRUDController.post(User));

//get all the user
router.get("/", CRUDController.get(User));

//get single user
router.get("/:id", CRUDController.getOne(User));

//update one user
router.patch("/:id", CRUDController.update(User));

//delete one user
router.delete("/:id", CRUDController.deleteOne(User));

module.exports = router;
