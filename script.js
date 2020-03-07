// ## Acceptance Criteria

// ```
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// ```


// // Assignment Code
// var generateBtn = document.querySelector("#generate");
// // var possibleChars = ["a", "A", "b", "B", "c", "C", "d", "D",
// //                       "e", "E", "f", "F", "g", "G", "h", "H",
// //                       "i", "I", "j", "J", "k", "K", "l", "L", "m",
// //                       "M", "n", "N", "o", "O", "p", "P", "q", "Q", "r", "R", "s", "S",
// //                       "t", "T", "u", "U", "v", "V", "w", "W", "x", "X", "y", "Y", "z", "Z",
// //                       "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// var howLong;
// var characterType = {
  
// };

// used https://www.youtube.com/watch?v=iKo9pDKKHnc for ideas
// the uploader (Web Dev Simplified) posted the project on git as well. https://github.com/WebDevSimplified/JavaScript-Password-Generator/blob/master/script.js

 
var passNums = prompt("How long would you like your password to be? (Minimum length: 7 characters, Maximum length: 128 characters)");
var lowerCase = confirm("Would you like to include lower case characters?");
var upperCase = confirm("Would you like to include upper case characters?");
var wantNums = confirm("Would you like to include numbers?");
var specialChars = confirm("Would you like to include special characters?");
alert("If neither lowercase or uppercase is selected, all characters will be in lowercase.");

function createArray(lowAscii, highAscii) {
  var howLong = []
  for (var i = lowAscii; i <= highAscii; i++) {
    howLong.push(i)
  }
  return howLong
}

function areYouANum(passNums){
  if(passNums.isInteger() === true) {
  return passNums
}
else if(passNums.isInteger() === false) {
 passnums = 129
}

var upperRange = createArray(65, 90)
var lowerRange = createArray(97, 122)
var numbersRange = createArray(48, 57)
var symbolsRange = createArray(33, 47).concat(createArray(58, 64)).concat(createArray(91, 96)).concat(createArray(123, 126))

function generatePassword(passNums, lowerCase, upperCase, wantNums, specialChars) {
  var parameters = lowerCase
  if (upperCase === "true") parameters = parameters.concat(upperRange)
  if (wantNums === "true") parameters = parameters.concat(numbersRange)
  if (specialChars === "true") parameters = parameters.concat(symbolsRange)
  
  var finalPassword = []
  for (let i = 0; i < passNums; i++) 
  if (i >= 129){
    alert("You did not enter a valid password length.")
  }
  else if (i >= 7 && i <= 128) {
    var allParams = parameters[Math.floor(Math.random() * parameters.length)]
    passwordCharacters.push(String.fromCharCode(allParams))
  }
  return finalPassword.join('')
}




                      

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) 
doItWork = generatePassword();

}