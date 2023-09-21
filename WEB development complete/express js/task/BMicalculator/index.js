const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var weight = req.body.w;
  var height = req.body.h;
  var BMI = weight / Math.pow(height, 2);
  res.send("your BMI is " + BMI);
});

app.listen("3000", function () {
  console.log("running");
});
