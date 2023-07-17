const express = require("express");
const cors = require("cors");
const api = require("./api");
require("./dbConnect");

const app = express();
const port = 3000 || process.env.port;

app.use(express.json());
app.use(cors());
app.use("/api", api);

app.get("/", (req, res) => {
  res.send("Hello Dunia!");
});
app.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});
