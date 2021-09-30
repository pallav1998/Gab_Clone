const express=require("express");
const connect=require("./config/db");

const app = express();
app.use(express.json());
const userSchema=require("./controller/user.controller")
const logingRouter=require("./controller/login.controller")





app.use("/users",userSchema);
app.use("/login",logingRouter);


app.listen(4000,async()=>{
await connect();
console.log("Listening on port 4000")
})