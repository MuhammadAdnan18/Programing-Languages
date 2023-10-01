const express = require("express");
const bodyParser = require("body-parser");
const { dirname } = require("path/posix");

const app = express();
var items = [];
var item = "";

//to use EJS first install EJS:npm install ejs
//and then sset view wngine to ejs
//for ejs to work properly we have to create a ejs template file which should be created inside a views directory
//ejs template is in html format
//so copy all the ocde form html files into list.ejs
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/", function (req, res) {
  //Date() is a js library which tells the day of week BUT as a number ie: Monday =1 sunday =0 ,saturday=6
  var today = new Date();
  var currentday = today.getDay();
  //so we will use "day" as word to be replace in template if its saturday or sunday than(day=weekend else day=weekday)
  /*
    var day = "";

  if (today.getDay() === 6 || today.getDay() === 0) {
    day = "weekend";
    //u can send this back to browser in the form of html just add html tags in the bracket and if u want to send multiple lines use res.write instead of res.send
    // res.sendFile(__dirname + "/index.html");

    //here we can use res.sendfile  and create multiple response html files for each day but it will be much more painful os we create a ejs template
    res.render("list", { day: day });
  } else {
    day = "weekday";
    res.render("list", { day: day });
  DO THIS FOR EACH DAY
 
  }
  switch (currentday) {
    case 0:
      day = "Sunday";
      break;

    case 1:
      day = "Monday";
      break;

    case 2:
      day = "Tuesday";
      break;

    case 3:
      day = "Wednesday";
      break;

    case 4:
      day = "Thursday";
      break;

    case 5:
      day = "Friday";
      break;

    case 6:
      day = "Saturday";
      break;
  }
  //the methodbused above works fine but we can display a better version of date by using .tolocaldatestring for this we first need to create option object
*/
  var option = { weekday: "long", month: "long", day: "numeric" };

  var day = today.toLocaleDateString("en-US", option);
  res.render("list", { day: day, newListItems: items });
});

app.post("/", function (req, res) {
  item = req.body.newItem;

  items.push(item);

  res.redirect("/");
});

app.listen("3000", function () {
  console.log("running");
});
