const express = require("express");
const http = require("http");
const path = require("path");
const cors = require("cors");
require('dotenv').config()

const PORT = process.env.PORT || 3001;

// console.log(process.env)

const app = express();
const router = express.Router();

// router.get("/", (req, res) => {
//   res.sendFile("build/index.html", { root: "." });
// });

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);


router.get("/api/error", function (req, res, next) {
  res.status(404).send({
    successes: false,
    message: "ページが見つかりません",
  });
});

// const staticPath = path.join(__dirname, "./build");
// app.use(express.static(staticPath));

app.use("/", router);

http.createServer(app).listen(PORT, () => {
  console.log(`listening port${PORT}`);
});
