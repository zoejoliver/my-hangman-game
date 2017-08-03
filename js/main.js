
var letterButton = '';
var letter;

//need function to take button press (letter) as input to check match with guessWord
//from a(65) to z(90)
for (var i=65; 90 >= i; i++){
//gets letters from character codes
  var letter = String.fromCharCode(i);
//each letter in order on button
  letterButton += '<button>' + letter + '</button>';
}
//
document.getElementById('box').innerHTML = letterButton;
