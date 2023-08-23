//for player 1
n = 6;
var randomnbr1 = Math.floor(Math.random() * n + 1);
var diceImage1 = "dice" + randomnbr1 + ".png";
var randomsrc1 = "images/" + diceImage1;
var image1 = document.querySelector(".img1").setAttribute("src", randomsrc1);

//for player2

var randomnbr2 = Math.floor(Math.random() * n + 1);
var diceImage2 = "dice" + randomnbr2 + ".png";
var randomsrc2 = "images/" + diceImage2;
var Image2 = document.querySelector(".img2").setAttribute("src", randomsrc2);

if (randomnbr1 > randomnbr2) {
  document.querySelector("h1").innerHTML = "Player 1 wins";
} else if (randomnbr2 > randomnbr1) {
  document.querySelector("h1").innerHTML = "Player 2 wins";
} else {
  document.querySelector("h1").innerHTML = "Match Draw";
}
