//function for clicking button by mouse(click)

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var button = this.innerHTML;
    makeSound(button);
  });
}
//eventlistner for keyboard (instead of click use keypress paraameter)
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.addEventListener("keypress", function (event) {
    makeSound(event.key);
  });
}

function makeSound(key) {
  switch (key) {
    case "w":
      var sound1 = new Audio("sounds/tom-1.mp3");
      sound1.play();

      break;
    case "a":
      sound2 = new Audio("sounds/tom-2.mp3");
      sound2.play();
      break;
    case "s":
      sound3 = new Audio("sounds/tom-3.mp3");
      sound3.play();
      break;
    case "d":
      sound4 = new Audio("sounds/tom-4.mp3");
      sound4.play();
      break;
    case "j":
      sound5 = new Audio("sounds/crash.mp3");
      sound5.play();
      break;
    case "k":
      sound6 = new Audio("sounds/kick-bass.mp3");
      sound6.play();
    case "l":
      sound7 = new Audio("sounds/snare.mp3");
      sound7.play();
      break;

    default:
      alert("wrong key");
      break;
  }
}
