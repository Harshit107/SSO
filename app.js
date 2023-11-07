const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3001;

app.set("trust proxy", 1);

app.use(
  cors({
    origin: "*", // 
    allowedHeaders: ["Authorization", "Content-Type"],
  })
);
app.use(express.json());
require("./src/database/mongoose");

const userRouter = require("./src/login/router/UserRouter");

app.use("/users", userRouter);


app.get("/startserver", (req, res) => res.send("<h1>Server started </h1>"));
app.get("/checkserver", (req, res) =>
  res.send(
    `<h1>Hey Developer! Server is working fine, Go aHead! ${req.ip}</h1>`
  )
);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
