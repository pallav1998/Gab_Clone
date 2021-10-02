require("dotenv").config();
let express = require("express");
const connect = require("./config/db");
const cors = require("cors");


const app = express();

app.use(cors());

app.use(express.json());

const UserController = require("./controllers/user.controller");
const PostController = require("./controllers/post.controller");
const CommentsController = require("./controllers/comment.controller");

app.use("/users", UserController);
app.use("/posts", PostController);
app.use("/comments", CommentsController);

app.listen(process.env.SERVER_PORT, async function () {
  await connect();
  console.log(`Listning to port ${process.env.SERVER_PORT}`);
});
