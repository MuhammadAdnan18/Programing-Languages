const express = require("express");
const app = express();

//right now if we run this server on localhost;3000 nothing hapens
//we user app.get method to specify what should the user get in return after requesting for our server
//ap.get always before app.listen(it has two parameters 1)root location(/) 2) a funtion which uses request and response as parameter

app.get("/", function (request, response) {
  a = response.send("Congrats You havre created ur first server"); //u can send anything like(functions,html,etc)
  console.log(response);
});

app.get("/about", function (request, response) {
  var abt = "I am Adnan, Learning express JS";
  response.send(abt);
  console.log(response);
});
app.listen(3000, function () {
  console.log("server started on port 3000");
});
//a port on which this server is tuned
//DO NOT FORGET TO INSTALL NODEMON ON TERMINAL IF U DONT WANT TO PRESS CTRL+C AGAIN AND AGAIN.//
//to activate nodeman(nodemon filename(eg server.js))
