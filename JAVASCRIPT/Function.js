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

/*`const` is a signal that the identifier won't be reassigned. `let` is a signal that the variable may be reassigned, such as a counter in a loop, or a value swap in an algorithm.*/
