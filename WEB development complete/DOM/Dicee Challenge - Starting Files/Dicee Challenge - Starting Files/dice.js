//for player 1
n = 6;
//first generate a random number which we can use to generate random dice image name which will be used in creating the source path 
var randomnbr1 = Math.floor(Math.random() * n + 1);
//generating image name
var diceImage1 = "dice" + randomnbr1 + ".png";
//generating source for iamge
var randomsrc1 = "images/" + diceImage1;
//now select the img1 class and replace its source with a random number
var image1 = document.querySelector(".img1").setAttribute("src", randomsrc1);

//for player 2 (repeat all the steps but dont copy) 
var randomnbr2 = Math.floor(Math.random() * n + 1);
var diceImage2 = "dice" + randomnbr2 + ".png";
var randomsrc2 = "images/" + diceImage2;
var Image2 = document.querySelector(".img2").setAttribute("src", randomsrc2);

//game deciding logic
if (randomnbr1 > randomnbr2) {
  document.querySelector("h1").innerHTML = "Player 1 wins";
} else if (randomnbr2 > randomnbr1) {
  document.querySelector("h1").innerHTML = "Player 2 wins";
} else {
  document.querySelector("h1").innerHTML = "Match Draw";
}
