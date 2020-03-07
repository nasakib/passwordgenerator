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

 //Ask for input from user
var passNums = parseInt(prompt("How long would you like your password to be? (Range: 7-128)")); //

//Sets passNums = 129 incase of input out of range, so weird loops don't happen
if (passNums.isInterger == false){
  passNums = 129;
}

if (passNums <= 7) {
  passnums = 129;
} 

//create my Ascii array
  function createArray(lowAscii, highAscii) {
    var howLong = [];
    for (var i = lowAscii; i <= highAscii; i++) {
    howLong.push(i);
    }
    return howLong;
  }
 
  //Askinf for more input
var lowerCase = confirm("Would you like to include lower case characters?");
var upperCase = confirm("Would you like to include upper case characters?");
var wantNums = confirm("Would you like to include numbers?");
var specialChars = confirm("Would you like to include special characters?");
alert("If neither lowercase or uppercase is selected, all characters will be in lowercase.");

//Creating Ascii arrays so that I can concat them based on conditions from user
var upperRange = createArray(65, 90);
var lowerRange = createArray(97, 122);
var numbersRange = createArray(48, 57);
var symbolsRange = createArray(33, 47).concat(createArray(58, 64)).concat(createArray(91, 96)).concat(createArray(123, 126));

//Creating a user defined Ascii array
function getParameters(upperRange, lowerRange, numbersRange, symbolsRange) {
  parameters = this.lowerRange;
  if (this.upperCase == true) { 
    parameters = parameters.concat(this.upperRange);
  }
  if (this.wantNums == true) {
     parameters = parameters.concat(this.numbersRange);
    }
  if (this.specialChars == true) { 
    parameters = parameters.concat(this.symbolsRange);
  }
  return parameters;
}

//Generates password by taking is user's desired password length and getting random elements from user's custom Ascii array, created in the getParameters function.
function generatePassword(passNums) {
  var finalPassword=[];
  for(i = 0; (i < (this.passNums)); i++) {
  if ((this.passNums <= 129) && (this.passNums >= 7)){
    var character = getParameters()[Math.floor(Math.random() * getParameters().length)];
    finalPassword.push(String.fromCharCode(character));
  }
    else {
      finalPassword = [];
    }
  }
  return finalPassword.join('');
   }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  // var passwordText = password;
  document.getElementById("password").innerHTML = String(password);
}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);