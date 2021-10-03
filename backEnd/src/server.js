require("dotenv").config();
const express=require("express");
const connect=require("./config/db");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors=require("cors")
const app = express();
app.use(cookieParser());
// const cookieparser = require("cookie-parser");

app.use(express.json());
// app.use(cookieParser());
const userSchema=require("./controller/user.controller")
const logingRouter=require("./controller/login.controller")
const profile=require("./controller/profile.controller")
const logout=require("./controller/logout.controler")
const UserController = require("./controllers/user.controller");
const PostController = require("./controllers/post.controller");
const CommentsController = require("./controllers/comment.controller");


app.use(cors());

app.use("/users",userSchema);
app.use("/login",logingRouter);
app.use("/profile", profile);
app.use("/logout", logout);
app.use("/users", UserController);
app.use("/posts", PostController);
app.use("/comments", CommentsController);

// app.listen(8000,async()=>{
// await connect();
// console.log("Listening on port 4000")
// })
app.listen(process.env.SERVER_PORT, async function () {
  await connect();
  console.log(`Listning to port ${process.env.SERVER_PORT}`);
});