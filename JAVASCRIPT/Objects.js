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
