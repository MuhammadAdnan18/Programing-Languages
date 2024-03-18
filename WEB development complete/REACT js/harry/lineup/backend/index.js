const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3001;
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hello login");
});
app.listen(port, () => {
  console.log("server started on port " + port);
});
