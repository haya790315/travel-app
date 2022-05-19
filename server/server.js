const express = require("express");
const http = require("http");
const path = require("path");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 3001;

const app = express();
const apiRouter = express.Router();
const router = express.Router();

app.use("/", express.static(path.join(__dirname, "./dist")));

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

apiRouter.get(`*`, (req, res) => {
  try {
    const func = require(`./api/${req.params[0]}`);
    return func(req, res);
  } catch (err) {
    console.log(err);
    res.send("require handler error");
  }
});

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./dist/index.html"));
});
app.use("/api", apiRouter);

app.use("/", router);

http.createServer(app).listen(PORT, () => {
  console.log(`listening port${PORT}`);
});
