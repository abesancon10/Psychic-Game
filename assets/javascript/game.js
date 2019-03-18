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

  var computerAnswer =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];
  var userChoices = [
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
  console.log(userGuess)

  if (userChoices.indexOf(userGuess) > -1) {
    if (userGuess === computerAnswer) {
      win++;
      guessLeft = 9;
      guessChoices = [];
    }
  }
  if (userGuess !== computerAnswer) {
    guessLeft = --
  }
  if (guessLeft === 0) {
    losses++;
    guessLeft = 9;
    guessChoices = [];
  }
};
console.log(guessLeft);
console.log(computerChoices);
