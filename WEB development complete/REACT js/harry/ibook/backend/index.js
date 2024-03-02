const connectToMongo = require("./db");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
connectToMongo();
const port = 3001;
app.use(express.json());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.get("/api/v1/login", (req, res) => {
  res.send("hello login");
});
app.listen(port, () => {
  console.log("server started on port " + port);
});
