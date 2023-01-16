//DATA_TYPES
//int
//String
//Boolean
//BigInt
//float
let num1= 5;
console.log(num1 * Number.MAX_VALUE);

let fname="Muhammad";
let lname= "Adnan";

let user = fname + " " + lname;
console.log(user);

//Boolean
let bool1 = 5<4;
console.log(bool1, typeof bool1);

//CONVERTING ONE DATA TYPE INTO ANOTHER(eg string to int)

let name1 ="Adnan";
console.log(name1);

//here converted a int into string by placing 12 in a String bracket

let num2 = String("12 converted from int to string");
console.log(num2);

//arithetic operations(+-*/)

let var1=5;
let var2=3;

let result = var1 + var2; 
let result1= var1 * var2;

let var3 =5;
var3 -= 7;

let result3= Math.pow(4,3);
let s= 500;
let s1= 7;
let result5= s % s1;
console.log(result5);
console.log(result+ " " + result1 + " " + var3 +" "+ result3);