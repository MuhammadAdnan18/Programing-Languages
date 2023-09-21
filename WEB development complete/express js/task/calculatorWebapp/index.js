/*var a = document.querySelector("#first").innerHTML;
var b = document.querySelector("#second").innerHTML;

var ans = (document.querySelector("#ans").innerHTML = a + b);

var res = document.querySelector("#r").addEventListener(onclick, function () {
  console.log(ans);
});*/

const express = require("express");
//creating object for body parser
const bodyParser = require("body-parser");

const app = express();
//now we have to use bodyParser.urlencoded() method to send data from html file to server
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  //previously we used res.send to print a message on specific page/route but if we want to send a whole file or html page we use res.sendfile method
  res.sendFile(__dirname + "/index.html"); //it also uses file location as an input but insetead of using(/express js/task/calculatorWebapp/index.html)some thing like this we use(__dirname+"/index.html") to ensure that it runs on other computers aswell not in just our local computer
});

//now we have one file which takes input from user and below we will have to create response which is adding these 2 numbers
//for that we will need to send these numbers from html file in the function below
//for this procces we install a npm package code: 'npm install body-parser'

app.post("/", function (req, res) {
  //now we can access the numbers from html file to perform calculations by :req.body.num
  //now we just need to create two variables for each num and add them
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  res.send("the result is " + result);
});

app.listen("3000", function () {
  console.log("server running at 3000");
});
