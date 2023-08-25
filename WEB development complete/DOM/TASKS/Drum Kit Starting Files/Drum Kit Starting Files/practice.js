//how to add event linstener
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    alert("I am clicked");
  });
}
//how toplay sound on a click in website
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
  });
}
