var computerChoices = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
var win = 0;
var losses = 0;
var guessLeft = 9;
var guessChoices = [];

document.onkeyup = function(event) {
  var userGuess = event.key;

  var computerAnswer = computerChoices [Math.floor(Math.random() * computerChoices.length)];
  console.log(computerAnswer)
  console.log(userGuess)
  
};
