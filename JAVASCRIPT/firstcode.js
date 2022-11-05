
//to print
console.log("Hello_world");
let name = "ali";
let marks = 55;



// using variaables to store data
num = 2+2;
console.log(num);

// to define variable use LET
let username= "Adnan";
console.log(username);

//set variables constant
let r = 4;
//constant keyword
const pi=3.14;
let area;

area= r * r * pi;
console.log(area);

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

//RELATIONAL OPERATIONS(<,> etc)

//comparing 2 integers
let x = 6;
let y =4;
let num3= x > y;
console.log(num3);

//comparing two strings
let x1="Home";
let y1="House";
let num4= x1 > y1;
console.log(num4);

//comparing different data types
let x3="4";
let y3=2;
let num5 = x3 > y3; //(IT WILL AUTOMETICALLY CONVERT THE DATA TYPE AND THEN COMPARE)
console.log(num5);

//equal signs(ALWAYS USE 3 === equal signs)

let x4 =5;
let y4=5;
let num6= x4 === y4;
console.log(num6);

//LOGICAL OPERATORS( && . ||)
let data1 = x > y && x4 === y4;
console.log(data1);

let data2= x > y || x2 > y2;
console.log(data2);




//IF ELSE0
let grades= 60;
 if( grades > 90){

    console.log("GRADE:A");
}
else if(grades > 78 && grades < 90){
    console.log("GRADE:B");
}
else if(grades > 68 && grades < 78){

    console.log("GRADE:C");
}
else if(grades > 50 && grades < 68 ){

    console.log("GRADE:D");
}
else{
console.log("FAIL");
}

//SWITCH CASE//

let day="sunday";

switch(day){
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

let var4=5;
let var5=7;

let result4=var5+var4;
console.log(`The result of ${var4} and ${var5} is ${result4}`);

//LOOPS


for(let i = 0; i < 5; i++){
console.log("HELLO WORLD for"+ i +" number of loops");
}

let z=3;

//OBJECTS IN JAVASCRIPT
console.log("OBJECTS IN JAVASCRIPT");
let student={
name:"Adnan",
ID:53448,
Courses:6

};
//to print whole  
console.log(student);
//to print a sigle property:
console.log(student.name);
let leptop;
let alien={
name:"SKV",
tech:JSON,
leptop:{
    CPU:"I5",
    RAM:4,
    HD:500
}

}

for(let key in alien){
console.log(key, alien[key]);
}

//For-loop

console.log("----FOR LOOP----");

let t=3;

for (var i=1;i<10;i++){
    console.log(t+" * "+i+"="+(t*i));

    //if you want to break the the loop use "break" with if and if only stop for a specific pointer than use continue;

if( i==5 ){
    continue;
}
if ( i==7){
    break;
}




}

//ARRAYS:

var marks1=[88,57,72,49,77,23,90];

//printing/accesing specific index

console.log( marks[0]);

//accesing whole ARRAY

console.log(( marks1));

//OR//
var empty_arr=[];
empty_arr[0]="Ali";
empty_arr[2]="Hamza";
empty_arr[1]="Sohaib";
empty_arr[3]="Jamal";
empty_arr.push("farhan");
console.log(empty_arr);
//push function can be used to print number in order from 0 to x in sequence
//pop is used to delete numbers/variable from last to first (Stack)

var arr2=[];
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
arr2.shift(5)
console.log(arr2);
//adding variable in array without deleting but just replacing by index
arr2.unshift(9);
console.log(arr2);
//if you want to add on a specific index
arr2.splice(1,0,66);
console.log(arr2);
//if we want to acces particular portion of array we creat a new array and use slice to add a part of previou s array into it
var arr3=arr2.slice(1,3);
console.log(arr3);


//STRING
var name2= "muhammad Adnan";
console.log("length of String: "+name2.length);

//String Functions:


var str0="I am Ali"
console.log("normal string: "+str0);
var strS=str0.toLowerCase;
var strL=str0.toUpperCase;
console.log("after lower class: "+ strS);//all alphabets small 
console.log("after upper class: "+ strL);//all alphabests large

var str1="I study CS in Iqra University";
console.log("normal: "+str1);
var str2=str1.slice(9,11);
var str3=str1.slice(-1,-16);//to display particular data from whole string
console.log("Sliced: "+var2);
console.log("Sliced again: "+var3);
var str3=str1.indexOf("CS");
console.log("index of CS is: "+str3); //tO find location of particular word
var str4=str0.charAt(9);//to find what is present on [articular index]
console.log("at 9th index: "+str4);
var str5=str1.replace("CS","BBA");
console.log("CS is replaced by BBA "+str5);
var str6=str1.split(" "); //splits whole string into array
console.log("str1 splitted: "+str6);

//MATH CLASS
var mth0=1.5;
console.log("normal: "+mth0);
var mth1= Math.round(mth0);// round up any number
console.log("rounded up: "+mth1 );
var mth2=Math.ceil(5.2) ; //rounds up wo greater number
console.log(mth2);
var mth3=Math.floor(2.8)//rounds up to smaller number
console.log(mth3);
//RANDOM number generator
var ran0=Math.random();// gives u a random number between [0 to 1 eg 0.2435834]
console.log(ran0);
var ran1=6*ran0;
console.log(ran1);
//Date Object
 //unix time:time from 1st january 1970 to present in miliseconds
// epch time means starting time(1  st january 1970)
var dte0=new Date();
console.log(dte0);//current date
dte1=new Date("2022 7 3"); // custome date
console.log(dte1);
dte2=new Date(162787382);// mili seconds
console.log(dte2);
  
//FUNCTIONS

console.log("----FUNCTIONS----");
// declaration: creating finctin i sknown as declaring eg:Function add(num1, num2){ console.log(num1+ num2);}
// invoke: while invoking means using the function on particular instamce eg: add(5,4)

//Function to find grade;

function grade(marks){
if(marks>80 && marks<=100){
    console.log("A");
}
else if(marks>=70 && marks<80){
console.log("B");
}
else if(marks >= 60 && marks<70){
console.log("C");
}
else{
    console.log("F");
}
}
grade(72);
grade(88);
grade(50);

//Return
function mul(fun1 , fun2){
   var fun4= fun1 * fun2 //local variable (whose value cant be updated)
    fun5=0; // can create a gloabal variable inside function by not using var
   console.log(fun4); 
    return 2;
}

var fun3=mul(5,6); //Global variable (value can be changed)
console.log(fun3);

// function housing means that function can be called before writing a function (eg if u write function on line 80 bbut call it on line 70 java script itself will place the calling statement on top this is only for functions not for variables)

//Passed by Value: all premitive data types(number,string,boolean) , when we pass them through any function they pass their value not the orignal referance meaning the value which was declarded in the orignl global variable will not be affected eg:
             var val = 9;
function passbyvalue(val){
    a=val +6;
console.log(a);
}
passbyvalue(6);
console.log(val);// the orignal val is not effected

//Pass by Reference:all non preemptive data type(array,objects) are passed through the orignl referance value meaning if you pass them through tge function it will manipulate their orignal valuees
var refArray = [12,5,77,4];

function updateArr(ref0){
ref0[0]=9;

}
console.log(refArray); //before calling by refernce 
updateArr(refArray);  // calling function by referance of array
console.log(refArray); //after calling by referance 12 replaced by 9 
