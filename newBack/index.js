const express = require("express");
const cors = require("cors");
const { connection } = require("./configs/db");
const { userRouter } = require("./routes/user.route");
const { taskRouter } = require("./routes/task.route");

const app = express();

app.use(
  cors({
    origin: "https://newfrontend-7mzy4k346-hemantfw13s-projects.vercel.app", 
    credentials: true, 
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("HOME PAGE");
});

app.use("/user", userRouter);
app.use("/task", taskRouter);

app.listen(1010, async () => {
  try {
    await connection;
    console.log("Connected to DB");
  } catch (e) {
    console.log(e);
  }
  console.log("Listening on port 1010");
});
