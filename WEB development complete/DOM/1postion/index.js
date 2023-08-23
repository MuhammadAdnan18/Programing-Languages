document.querySelector("h1").innerHTML = "Changing red to blue";

//DIFFERENT METHODS TO change html elements on the flyt using javascript
//1)getElementsBy(TagName,ClassName,ID etc)

//like here we manipulated the text of account number to number from class name (account)
//a)Class
document.getElementsByClassName("account")[0].innerHTML = "number";

//b)tagname
document.getElementsByTagName("h1")[0].innerHTML =
  "<i>Hello I am now italic<i>";

//c)ID(u can also use theme to style)

document.getElementById("fname").style.color = "Blue";

//2)querrySelector(In querry selector u have to mention the  specific query before the name ie # for ID,. for class etc )
//U can use querry selector to select all the elements
document.querySelector("#btn").innerHTML = "used to be btn";

document.querySelector("#btn").style.color = "yellow";

//NOW we can style elementrs like thus but this the wrong way bcz idealy styling should be done in css only behaviour part should be handles in JS it makes it easier to debug when problem arises.
//so we have another method in which u create a class in css and than all properties of that class are added into selected elemnts by
//3classList.add() method
document.querySelector(".nation").classList.add("nationColor");
//in this case we changed color of selector

//4).setAttribute (We can also modify the attributes with this property e.g change facebook link to youtube)
document
  .querySelector("#fb")
  .setAttribute(
    "href",
    "https://www.youtube.com/watch?v=wZHtZ_VJGKI&list=PL8p2I9GklV47TMMnPzqnkCtSOS3ebr4O7"
  );
