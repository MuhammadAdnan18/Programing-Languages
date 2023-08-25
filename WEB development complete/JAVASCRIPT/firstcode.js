//Alert and Prompt
//alert is used to show a statement to user with an ok button
//prompt is used to take info from users (ie it can ask quetion like what is your name)
alert("These are the top 5 football players");
name1 = prompt("what is your name");
//string concatination(adding 2 strings with + sign)
alert("welcome, " + name1);
player = prompt("who is your fav player?");

if (player == "ronaldo" || player === "messi") {
  alert("well he is in the list");
} else {
  alert("well he didnt make it in the list");
}

//2)Length property
myname = "Adnan";
console.log(myname);
console.log(myname.length);

//problem:ask user to compose their tweet with a character limit of 200 and also tell them the amount of characters they have written and remaining in alert)
var tweet = prompt("write tweet");
var tweetMax = 200;
var len = tweet.length;
var remainder = tweetMax - len;
alert(
  "you have written " +
    len +
    " characters, you have" +
    remainder +
    " characters left"
);

//3)slice property
//with slice u can take out the desirable portion of the string/paragraph and remove anything else just mention the initiial and last index between which u want to keep the string and others will be removed(0,200)0 to 199 will remain i.e total of 200

//problem
var essay = prompt("write essayunder 200 words");

var essayMax = essay.slice(0, 200);
alert(essayMax);

//Upppercase and lowercase
a = prompt("enter your name");

capital = a.slice(0, 1);
small = a.slice(1);
capitalName = capital.toUpperCase();
smallName = small.toLowerCase();
var fullName = capitalName + smallName;

alert(fullName);

//Random number generator:it generates from 0 to 0.999999999999 so we can multiply it by any number and it will generate a random number in that range

//problem:create a love calculator that will generate any random score to satisfy a user and modify the alert statement based on the lovescore
var w = prompt("Enter your name");
var h = prompt("enter your lover");

chances = Math.floor(Math.random() * 101);

if (chances > 70) {
  alert("your lovescore is " + chances + "%, you are a perfect match");
} else if (chances > 50 && chances < 71) {
  alert("youur lovescore is " + chances + "% it may or may not work out");
} else {
  alert("your chances are " + chances + "% they are not the one for u");
}

//to print
console.log("Hello_world");
let name = "ali";
let marks = 55;

// using variaables to store data
num = 2 + 2;
console.log(num);

// to define variable use LET
let username = "Adnan";
console.log(username);

//set variables constant
let r = 4;
//constant keyword
const pi = 3.14;
let area;

area = r * r * pi;
console.log(area);

//DATA_TYPES
//int
//String
//Boolean
//BigInt
//float
let num1 = 5;
console.log(num1 * Number.MAX_VALUE);

let fname = "Muhammad";
let lname = "Adnan";

let user = fname + " " + lname;
console.log(user);

//Boolean
let bool1 = 5 < 4;
console.log(bool1, typeof bool1);

//CONVERTING ONE DATA TYPE INTO ANOTHER(eg string to int)

let name1 = "Adnan";
console.log(name1);

//here converted a int into string by placing 12 in a String bracket

let num2 = String("12 converted from int to string");
console.log(num2);

//arithetic operations(+-*/)

let var1 = 5;
let var2 = 3;

let result = var1 + var2;
let result1 = var1 * var2;

let var3 = 5;
var3 -= 7;

let result3 = Math.pow(4, 3);
let s = 500;
let s1 = 7;
let result5 = s % s1;
console.log(result5);
console.log(result + " " + result1 + " " + var3 + " " + result3);

//RELATIONAL OPERATIONS(<,> etc)

//comparing 2 integers
let x = 6;
let y = 4;
let num3 = x > y;
console.log(num3);

//comparing two strings
let x1 = "Home";
let y1 = "House";
let num4 = x1 > y1;
console.log(num4);

//comparing different data types
let x3 = "4";
let y3 = 2;
let num5 = x3 > y3; //(IT WILL AUTOMETICALLY CONVERT THE DATA TYPE AND THEN COMPARE)
console.log(num5);

//equal signs(ALWAYS USE 3 === equal signs)

let x4 = 5;
let y4 = 5;
let num6 = x4 === y4;
console.log(num6);

//LOGICAL OPERATORS( && . ||)
let data1 = x > y && x4 === y4;
console.log(data1);

let data2 = x > y || x2 > y2;
console.log(data2);

//IF ELSE0
let grades = 60;
if (grades > 90) {
  console.log("GRADE:A");
} else if (grades > 78 && grades < 90) {
  console.log("GRADE:B");
} else if (grades > 68 && grades < 78) {
  console.log("GRADE:C");
} else if (grades > 50 && grades < 68) {
  console.log("GRADE:D");
} else {
  console.log("FAIL");
}

//SWITCH CASE//

let day = "sunday";

switch (day) {
  case "moday":
    console.log("wake up its 4am");
    break;
  case "thursday":
    console.log("wake up its 8 am");
    break;
  case "sunday":
    console.log("wake up its 12am");
    break;
}

//TEMPLATE LITERAL (for printing)

let var4 = 5;
let var5 = 7;

let result4 = var5 + var4;
console.log(`The result of ${var4} and ${var5} is ${result4}`);

//LOOPS
//whileloop

//problem: print fizz if divisible by 3 ,print  buzz if by 5 and fizzbuzz if by both (push value ibto array)
var output = [];
var numbr = 1;

function fizzbuzz() {
  while (numbr < 30) {
    numbr++;

    if (numbr % 3 == 0) {
      output.push("Fizz");
    } else if (numbr % 5 == 0) {
      output.push("Buzz");
    } else if (numbr % 3 == 0 && numbr % 5 == 0) {
      output.push("FizzBuzz");
    } else {
      output.push(numbr);
    }
  }
  console.log(output);
}

fizzbuzz();

//hiigh order functions:those functions which can take other functions as asn input

//problem: create a calculator which can add sub mul and devide
function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function devide(a, b) {
  return a / b;
}

function calc(a, b, operator) {
  return operator(a, b);
}

calc(7, 8, devide);

//Forloop
for (let i = 0; i < 5; i++) {
  console.log("HELLO WORLD for" + i + " number of loops");
}

let z = 3;

//problem:write a song from 99 bottle to 0
var botle = 99;

for (botle < 2; botle--; ) {
  var remaining = botle - 1;

  console.log(botle + " bottles of water take one down " + remaining + " left");
}

//OBJECTS IN JAVASCRIPT
//objects when a object has many properties u dont have to explicitely define it u can also create an object
var houseKeeper = {
  name: "lisa",
  experience: "12years",
  work: ["laundary", "cooking", "cleaning"],
};
console.log(houseKeeper);

//now if I want to hire multiple housekeepers i dont wanna enter the deatail manually instead i create a constructor function which creates the objects for me I just need to input information
//construcotr
function ObjectGenerator(name, age, exp, work) {
  this.name = name;
  this.age = age;
  this.exp = exp;
  this.work = work;
}

//now generating housekeeper1 using the objectGenerator function above
var houseKeeper1 = new ObjectGenerator("Arya", 19, "2years", [
  "laundary",
  "cooking",
  "cleaning",
]);

console.log(houseKeeper1);

console.log("OBJECTS IN JAVASCRIPT");
let student = {
  name: "Adnan",
  ID: 53448,
  Courses: 6,
};
//to print whole
console.log(student);
//to print a sigle property:
console.log(student.name);
let leptop;
let alien = {
  name: "SKV",
  tech: JSON,
  leptop: {
    CPU: "I5",
    RAM: 4,
    HD: 500,
  },
};

for (let key in alien) {
  console.log(key, alien[key]);
}

//For-loop

console.log("----FOR LOOP----");

let t = 3;

for (var i = 1; i < 10; i++) {
  console.log(t + " * " + i + "=" + t * i);

  //if you want to break the the loop use "break" with if and if only stop for a specific pointer than use continue;

  if (i == 5) {
    continue;
  }
  if (i == 7) {
    break;
  }
}

//ARRAYS:

var marks1 = [88, 57, 72, 49, 77, 23, 90];

//printing/accesing specific index

console.log(marks[0]);

//accesing whole ARRAY

console.log(marks1);

//OR//
var empty_arr = [];
empty_arr[0] = "Ali";
empty_arr[2] = "Hamza";
empty_arr[1] = "Sohaib";
empty_arr[3] = "Jamal";
empty_arr.push("farhan");
console.log(empty_arr);

//problem:create a program that asks user to enter name to enter the party if their naeme is iin the guestlist welcone them else not .
var guestList = [
  "Ali",
  "Umar",
  "Anjam",
  "Usman",
  "Ahmad",
  "Sajal",
  "Saad",
  "Amir",
];

var guestname = prompt("Enter your name");

if (guestList.includes(guestname)) {
  alert("welcome");
} else {
  alert("not welcome");
}

//push function can be used to print number in order from 0 to x in sequence
//pop is used to delete numbers/variable from last to first (Stack)

var arr2 = [];
arr2.push("11");
arr2.push("22");
arr2.push(33);
arr2.push(44);
arr2.push(55);
console.log(arr2);
//to remove
arr2.pop();
arr2.pop();
console.log(arr2);

//to remove from start we use shift
arr2.shift(5);
console.log(arr2);
//adding variable in array without deleting but just replacing by index
arr2.unshift(9);
console.log(arr2);
//if you want to add on a specific index
arr2.splice(1, 0, 66);
console.log(arr2);
//if we want to acces particular portion of array we creat a new array and use slice to add a part of previou s array into it
var arr3 = arr2.slice(1, 3);
console.log(arr3);

//STRING
var name2 = "muhammad Adnan";
console.log("length of String: " + name2.length);

//String Functions:

var str0 = "I am Ali";
console.log("normal string: " + str0);
var strS = str0.toLowerCase;
var strL = str0.toUpperCase;
console.log("after lower class: " + strS); //all alphabets small
console.log("after upper class: " + strL); //all alphabests large

var str1 = "I study CS in Iqra University";
console.log("normal: " + str1);
var str2 = str1.slice(9, 11);
var str3 = str1.slice(-1, -16); //to display particular data from whole string
console.log("Sliced: " + var2);
console.log("Sliced again: " + var3);
var str3 = str1.indexOf("CS");
console.log("index of CS is: " + str3); //tO find location of particular word
var str4 = str0.charAt(9); //to find what is present on [articular index]
console.log("at 9th index: " + str4);
var str5 = str1.replace("CS", "BBA");
console.log("CS is replaced by BBA " + str5);
var str6 = str1.split(" "); //splits whole string into array
console.log("str1 splitted: " + str6);

//MATH CLASS
var mth0 = 1.5;
console.log("normal: " + mth0);
var mth1 = Math.round(mth0); // round up any number
console.log("rounded up: " + mth1);
var mth2 = Math.ceil(5.2); //rounds up wo greater number
console.log(mth2);
var mth3 = Math.floor(2.8); //rounds up to smaller number
console.log(mth3);
//RANDOM number generator
var ran0 = Math.random(); // gives u a random number between [0 to 1 eg 0.2435834]
console.log(ran0);
var ran1 = 6 * ran0;
console.log(ran1);
//Date Object
//unix time:time from 1st january 1970 to present in miliseconds
// epch time means starting time(1  st january 1970)
var dte0 = new Date();
console.log(dte0); //current date
dte1 = new Date("2022 7 3"); // custome date
console.log(dte1);
dte2 = new Date(162787382); // mili seconds
console.log(dte2);

//FUNCTIONS

console.log("----FUNCTIONS----");
// declaration: creating finctin i sknown as declaring eg:Function add(num1, num2){ console.log(num1+ num2);}
// invoke: while invoking means using the function on particular instamce eg: add(5,4)

//Function to find grade;

function grade(marks) {
  if (marks > 80 && marks <= 100) {
    console.log("A");
  } else if (marks >= 70 && marks < 80) {
    console.log("B");
  } else if (marks >= 60 && marks < 70) {
    console.log("C");
  } else {
    console.log("F");
  }
}
grade(72);
grade(88);
grade(50);

//PROBLEM:create a functon that takes budget as an input and treturns the amount of bottle su can buy if one bottle costs 1.5$
var cost = 1.5;

function buy(budget) {
  var bottles = Math.trunc(budget / cost);
  console.log("you have bought " + bottles + " bottles");
}

buy(15);

//PROBLEM: create a BMI calculator
//BMI calculator

var w = prompt("Enter your weight");
var h = prompt("enter your height");

function BMI(w, h) {
  var height = Math.pow(h, 2);

  var B = w / height;
  return B;
}
BMI(w, h);

//Return
function mul(fun1, fun2) {
  var fun4 = fun1 * fun2; //local variable (whose value cant be updated)
  fun5 = 0; // can create a gloabal variable inside function by not using var
  console.log(fun4);
  return 2;
}

var fun3 = mul(5, 6); //Global variable (value can be changed)
console.log(fun3);

// function housing means that function can be called before writing a function (eg if u write function on line 80 bbut call it on line 70 java script itself will place the calling statement on top this is only for functions not for variables)

//Passed by Value: all premitive data types(number,string,boolean) , when we pass them through any function they pass their value not the orignal referance meaning the value which was declarded in the orignl global variable will not be affected eg:
var val = 9;
function passbyvalue(val) {
  a = val + 6;
  console.log(a);
}
passbyvalue(6);
console.log(val); // the orignal val is not effected

//Pass by Reference:all non preemptive data type(array,objects) are passed through the orignl referance value meaning if you pass them through tge function it will manipulate their orignal valuees
var refArray = [12, 5, 77, 4];

function updateArr(ref0) {
  ref0[0] = 9;
}
console.log(refArray); //before calling by refernce
updateArr(refArray); // calling function by referance of array
console.log(refArray); //after calling by referance 12 replaced by 9

/*`const` is a signal that the identifier won't be reassigned. `let` is a signal that the variable may be reassigned, such as a counter in a loop, or a value swap in an algorithm.*/

//CLASSES

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

let car1 = new Car("Honda", 1992);
console.log(car1);

// program to Replicate the working of an ATM machine in c++?
