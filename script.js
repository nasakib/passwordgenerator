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

 //Ask for input from user
var passNums = parseInt(prompt("How long would you like your password to be? (Range: 8-128)")); //

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

//Creating Ascii arrays so that I can concat them based on input from user
var upperRange = createArray(65, 90);
var lowerRange = createArray(97, 122);
var numbersRange = createArray(48, 57);
var symbolsRange = createArray(33, 47).concat(createArray(58, 64)).concat(createArray(91, 96)).concat(createArray(123, 126));

//Creating a user defined Ascii array
function getParameters(upperRange, lowerRange, numbersRange, symbolsRange) {
  parameters = this.lowerRange;
  if (this.upperCase == true) { 
    parameters = parameters.concat(this.upperRange); //concats upperRange array into the parameters array.
  }
  if (this.wantNums == true) {
     parameters = parameters.concat(this.numbersRange);
    }
  if (this.specialChars == true) { 
    parameters = parameters.concat(this.symbolsRange);
  }
  return parameters;
}

//Generates password by taking in user's desired password length and getting random elements from user's custom Ascii array, created in the getParameters function.
function generatePassword(passNums) {
  var finalPassword=[];
  for(i = 0; (i < (this.passNums)); i++) {
  if ((this.passNums <= 128) && (this.passNums >= 8)) { //will only run if user inputs number between 8-128.
    var character = getParameters()[Math.floor(Math.random() * getParameters().length)]; //multiplies random number 0-1 with custom array length, rounds down, and returns element in that index of custom array.
    finalPassword.push(String.fromCharCode(character)); //converts Ascii values to regular characters and puts it into finalPassword array
  }
    else {
      finalPassword = []; //empty array if conditions aren't met
    }
  }
  return finalPassword.join(''); //removes spaces in finalPassword array.
   }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  document.getElementById("password").innerHTML = password;
}