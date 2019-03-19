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
var guessChoices = ["a",
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
"z"];

document.onkeyup = function(event) {
  var userGuess = event.key;

  var computerAnswer =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];
  //causes answer to change every time a button is clicked

  var userChoices = [
    
  ];

  if (userGuess === computerAnswer) {
    win++;
    guessLeft = 9;
  } if (userGuess !== computerAnswer) {
    guessLeft--

  }
  
  if (guessLeft === 0) {
    losses++;
    guessLeft = 9;
    guessChoices = [];
  } 
  console.log(guessLeft);
  console.log(userGuess);
  console.log(win);
  console.log(losses);
  console.log(computerAnswer);
};
