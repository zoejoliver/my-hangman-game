
 //alphabet buttons
var letterButton = '';
var resultDisplay = ''; //underscores for letters mmm
var wordsArray = ['dog', 'cat', 'cow', 'pig'];
var answerWord;
var char;
var numChar;
var result = [];
var newResult = [];
var answerArray = [];

var guessCount = 0;
var maxGuess = 5;


//draw all underscores first
function initialDisplay(){
  answerWord = wordsArray[Math.floor(Math.random() * (wordsArray.length))];
  answerArray = [];

  for (var i = 0; i<answerWord.length; i++){
    answerArray[i] = "_";
  }
  document.getElementById('answer-word').innerHTML = answerArray.join(" ");
}
initialDisplay();


for (var i = 65; 90 >= i; i++) {// A-65, Z-90
  char = String.fromCharCode(i).toLowerCase();
  letterButton += '<button onclick="setLetter(\'' + char + '\');">' + char + '</button>';
}
document.getElementById('box').innerHTML = letterButton;

function setLetter(x) {
  //check each letter in answerWord for match
  for (var i=0; i<answerWord.length; i++){
    if(answerWord[i] === x){
      answerArray[i] = x;
    }
  }
  var remainingLetters = answerArray.length;
  for(var i=0; i<answerArray.length; i++){
    if (answerArray[i] !== '_'){
      remainingLetters -= 1;
    }
  }
  if (remainingLetters == 0){
    document.getElementById('wrongGuess').innerHTML = "Congratulations! You guessed the word";
  }
  else{
    document.getElementById('wrongGuess').innerHTML += x;
  }
  document.getElementById("answer-word").innerHTML = answerArray.join(" ");
  char = '';
}
