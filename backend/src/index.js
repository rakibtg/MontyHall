const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");

const app = express();
const HOST = "localhost";
const PORT = 5500;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routes);

app.listen(PORT, HOST, () =>
  console.log(`Monty Hall Simulator App listening at http://${HOST}:${PORT}`)
);
