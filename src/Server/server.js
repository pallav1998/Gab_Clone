require("dotenv").config();
let express = require("express");
const connect = require("./Config/db");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();

app.use(cookieParser());
app.use(cors());
app.use(express.json());

const UserControllers = require("./Controllers/user.controller");
const PostControllers = require("./Controllers/post.Controller");
const CommentsControllers = require("./Controllers/comment.Controller");
//noor
const logingRouter = require("./Controllers/login.Controller");
const profile = require("./Controllers/profile.Controller");
const logout = require("./Controllers/logout.controller");

app.use("/users", UserControllers);
app.use("/posts", PostControllers);
app.use("/comments", CommentsControllers);
//noor
app.use("/login", logingRouter);
app.use("/profile", profile);
app.use("/logout", logout);

const PORT = process.env.SERVER_PORT || 4500;
app.listen(PORT, async function () {
  await connect();
  console.log(`Listning to port ${PORT}`);
});
