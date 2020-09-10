const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const cors = require("cors");

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(cors());
}
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routes);

module.exports = {
  app,
};
