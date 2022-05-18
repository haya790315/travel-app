const express = require("express");
const http = require("http");
const path = require("path");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 3001;

// console.log(process.env)

const app = express();
const router = express.Router();

app.use(express.static(path.join(__dirname, "./dist")));


app.use(
  cors({
    origin: "http://localhost:3000",
  })
  );
  
  router.get("/api", (req, res) => {
    res.status(200).send({ successes: true, message: "this is api" });
  });
  
  router.get("/api/error", function (req, res, next) {
    res.status(404).send({
      successes: false,
      message: "ページが見つかりません",
    });
  });
  
  router.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "./dist/index.html"));
  });
  app.use("/", router);
  
  http.createServer(app).listen(PORT, () => {
    console.log(`listening port${PORT}`);
  });
