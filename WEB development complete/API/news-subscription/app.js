const bodyParser = require("body-parser");
const express = require("express");
const request = require("request");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) {
  var firstname = req.body.fname;
  var lastname = req.body.lname;
  var email = req.body.email;

  var data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
      },
    ],
  };

  var jsonData = JSON.stringify(data);
  var options = {
    url: "https://us18.api.mailchimp.com/3.0/lists/83193eec38",
    method: "post",
    headers: { Authorization: "Adnan 82ca120eb01f2b1e86f2069e8d6fe30d-us21" },
    body: jsonData,
  };

  request(options, function (error, resonse, body) {
    if (error) {
      console.log(error);
    } else {
      console.log(express.response.statusCode);
    }
  });
});

app.listen(3000, function () {
  console.log("running");
});

//api key : 82ca120eb01f2b1e86f2069e8d6fe30d-us21
//list id: 83193eec38
