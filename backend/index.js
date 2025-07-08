import express from "express";
import userRouter from "./routes/user.route.js"
import postRouter from "./routes/post.route.js"
import commentRouter from "./routes/comment.route.js"
import dbConnect from "./lib/connectDB.js"
import connectDB from "./lib/connectDB.js";
const app = express();
app.use(express.json())
const test = process.env.test
console.log('test :>> ', test);

connectDB()
// app.get("/test", (req, res)=>{
//   res.status(200).send("it works")
// })

app.use("/users", userRouter)
app.use("/posts", postRouter)
app.use("/comments", commentRouter)


app.listen(3000, () => {
  console.log("server is running");
});
