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