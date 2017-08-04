
var letterButton = '';
var resultDisplay = '';
var letter;
var words = ['dog', 'cat', 'rabbit', 'pig'];
var guessWord;
var result = '';

//generate random word to guess
function chooseWord(){
    guessWord = words[Math.floor(Math.random() * (words.length))];
    return guessWord;
}

//show underscore for each letter of guessWord
function answerDisplay(guessWord){
      for (i=0; i<guessWord.length; i++){
        result += '_ ';
      }
      return result;
      resultDisplay += '<div>' + result + '</div>';
}

//when correct letter is guessed (correctLetter) change underscore at correct place to letter
function revealCorrect(place, correctLetter, result){
  return result.substr(0, place) + correctLetter + result.substr(place + 1, result.length);
}

//need function to take button press (letter) as input to check match with guessWord
//from a(65) to z(90)
function showAlphabet(){
    for (var i=65; 90 >= i; i++){
//gets letters from character codes
      var letter = String.fromCharCode(i);
//each letter in order on button
      letterButton += '<button>' + letter + '</button>';

    }

    return letterButton;

}

document.getElementById('box').innerHTML = showAlphabet();

document.getElementById('answerWord').innerHTML = answerDisplay(chooseWord());
