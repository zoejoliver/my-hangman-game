$(document).ready(function(){
 //alphabet buttons
var letterButton = '';
var resultDisplay = ''; //underscores for letters mmm
var wordsArray = ['dog', 'cat', 'rabbit', 'lion', 'tiger', 'llama', 'hyena',
                  'elk', 'chimpanzee', 'gorilla', 'bear', 'elephant', 'rhino'];
var answerWord;
var char;
var answerArray = [];
var hangmanState = 0;

var drawSequence = [drawHead, drawTorso, drawLeftArm, drawRightArm, drawLeftLeg, drawRightLeg];


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
  if (remainingLetters === 0){
    document.getElementById('wrongGuess').innerHTML = "Congratulations! You guessed the word";
  }
  else{
    if(answerWord.indexOf(x) < 0){
    document.getElementById('wrongGuess').innerHTML += x;
    drawSequence[hangmanState++]();
    }
    if (hangmanState === drawSequence.length){
      document.getElementById('wrongGuess').innerHTML = "Sorry, you lose";
    }
  }
  document.getElementById("answer-word").innerHTML = answerArray.join(" ");
  char = '';
}

function showAnswer(){
  for(var j = 0; j<answerWord.length; j++){
    answerArray[j] = answerWord[j];
  }
  document.getElementById("answer-word").innerHTML = answerArray.join(" ");
}

function playAgain(){
  answerWord = '';
  answerArray = [];
  initialDisplay();
  document.getElementById("wrongGuess").innerHTML = '. . . '
  hangmanState = 0;
  $('.body-part').remove();
}


function drawHead(){
  $('.drawArea').append($('<div/>').addClass("body-part head"));
}
function drawTorso(){
  $('.drawArea').append($('<div/>').addClass("body-part armbox").append($('<div/>').addClass("body-part torso")));
  $('.drawArea').append($('<div/>').addClass("body-part legbox").append($('<div/>').addClass("body-part pelvis")));

}
function drawLeftArm(){
  $('.armbox').prepend($('<div/>').addClass("body-part leftarm"));

}
function drawRightArm(){
  $('.armbox').prepend($('<div/>').addClass("body-part rightarm"));

}
function drawLeftLeg(){
  $('.legbox').prepend($('<div/>').addClass("body-part leftleg"));
}
function drawRightLeg(){
  $('.legbox').prepend($('<div/>').addClass("body-part rightleg"));
}
});
