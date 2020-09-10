const { app } = require("./app");

const HOST = "localhost";
const PORT = 5500;

app.listen(PORT, HOST, () =>
  console.log(`Monty Hall Simulator App listening at http://${HOST}:${PORT}`)
);
