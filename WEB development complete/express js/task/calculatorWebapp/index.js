/*var a = document.querySelector("#first").innerHTML;
var b = document.querySelector("#second").innerHTML;

var ans = (document.querySelector("#ans").innerHTML = a + b);

var res = document.querySelector("#r").addEventListener(onclick, function () {
  console.log(ans);
});*/

const express = require("express");
const app = express();

app.get("/", function (req, res) {
  //previously we used res.send to print a message on specific page/route but if we want to send a whole file or html page we use res.sendfile method
  res.sendFile(__dirname + "/index.html"); //it also uses file location as an input but insetead of using(/express js/task/calculatorWebapp/index.html)some thing like this we use(__dirname+"/index.html") to ensure that it runs on other computers aswell not in just our local computer
});

app.listen("3000", function () {
  console.log("server running at 3000");
});
