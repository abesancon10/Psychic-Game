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
var win = 0;
var losses = 0;
var guessLeft = 9;
var guessChoices = [];

document.onkeyup = function(event) {
  var userChoices = event.key;

  var computerAnswer =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];
  //causes answer to change every time a button is clicked


  if (userGuess === computerAnswer) {
    win++;
    guessLeft = 9;
    guessChoices = [];
  } else if (userGuess !== computerAnswer) {
    guessLeft--

  }
  //it works now; experimenting with loops = waste for this
  else if (guessLeft === 0) {
    losses++;
    guessLeft = 9;
    guessChoices = [];
  } //try a loop
  console.log(guessLeft);
  console.log(userGuess);
  console.log(win);
  console.log(losses);
  console.log(computerAnswer);
};
