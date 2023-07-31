
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
