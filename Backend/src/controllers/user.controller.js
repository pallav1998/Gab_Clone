const express = require("express");
const router = express.Router();
const User = require("../Models/user.model");
const upload = require("../Utlis/fileUploads");
const CRUDController = require("./CRUD.controller");

//uploads file
// router.post("/", upload.any("userImage"), async (req, res) => {
//   // console.log(req.file);
//   const files = req.files.map((file) => file.path);

//   const user = await User.create({
//     user_name: req.body.user_name,
//     // first_name: req.body.first_name,
//     // last_name: req.body.last_name,
//     password: req.body.password,
//     confirm_password: req.body.password,
//     gender: req.body.gender,
//     email: req.body.email,
//     age: req.body.age,
//     // tokens: req.body.tokens,
//     photo_url: files,
//   });

//   return res.status(201).json({ data: user });
// });

router.post("/", async (req, res) => {
  const { user_name, email, password, confirm_password } = req.body;
  if (!user_name || !email || !password || !confirm_password) {
    return res.status(422).json({ error: "Please fill all the Data" });
  }
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "Already user Exist" });
    }

    const user = new User({ user_name, email, password, confirm_password });
    await user.save();
    res.status(201).json({ message: "User Registration Sucessfully" });
  } catch (err) {
    res.status(400).json({ status: "Error in Post", message: err.message });
  }
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
