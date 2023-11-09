const mongoose = require("mongoose");
//creeating new datrabase is overwhelming in mongo db but in mongoose u just have to write url with a name of database at the end (/druitsDB)
mongoose.connect("mongodb://127.0.0.1:27017/carsDB");

//IN mongoose we have to create a structure for the collectins we will create inside this database they are called
//schemas
const carSchema = new mongoose.Schema({
  name: String,
  price: Number,
  review: Number,
});

//here we define the collection where first parameter takes the name of collections and second parameter takes the schema the colletion will be built upon
const Car = mongoose.model("Car", carSchema);
const car1 = "";
/*
//---------------------------------------INSERT---------------------------------------------

//INSERTIING DATA IN COLLECTION
const car1 = new Car({
  name: "Honda",
  price: 10000000,
  review: 4,
});
const car2 = new Car({
  name: "corolla",
  price: 10000000,
  review: 5,
});
const car3 = new Car({
  name: "civic",
  price: 10000000,
  review: 4,
});
const car4 = new Car({
  name: "mehran",
  price: 10000000,
  review: 3,
});

car1.save().then(() => console.log("saved"));
car2.save().then(() => console.log("saved"));
car3.save().then(() => console.log("saved"));
car4.save().then(() => console.log("saved"));

//if u want to insert multiple items in database :
const items = [car1, car2, car3, car4];

Car.insertMany(items)
  .then(function () {
    console.log("succes");
  })
  .catch(function (err) {
    console.log(err);
  });

  */

//------------------------------READ DATA---------------------------

//to read data we have methods like// find all documentsawait MyModel.find({});,await MyModel.find({ name: 'john', age: { $gte: 18 } }).exec();,await MyModel.find({ name: /john/i }, 'name friends').exec();
//but they can only work inside a async function so create a async function
async function myCars() {
  const cars = await Car.find();
  //after u have done ur work with database it is good practice to close connection

  mongoose.connection.close();

  cars.forEach(function (c) {
    console.log(c.name);
  });
}

myCars();

//-------------------------------DELETE-----------------------------------------

const ID = car1;
Car.findByIdAndDelete(ID).then(function () {
  console.log("deleted");
});
res.redirect("/").catch(function (err) {
  console.log(err);
});
