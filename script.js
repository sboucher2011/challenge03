
//-----------------------------------------------
// Variable Setup
//-----------------------------------------------
var length = 5;
var upper = 'false';
var lower = 'false';
var number = 'false';
var symbol = 'false';
var passwordArray = [];
var lengthEl = document.getElementById('charecter-count');

//-----------------------------------------------
// Function to Create Random Numbers
//-----------------------------------------------
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);
  return value;
};

//-----------------------------------------------
// Generate Random Variable for Selected Criteria
//-----------------------------------------------
function generateVariable(selector) {
  switch(selector) {
    //uppercase generation
    case 'upperCase':
      //ASCII 65-90
      var randUpper = randomNumber(65,90);
      passwordArray.push(String.fromCharCode(randUpper));
      break;

    //lowercase generation
    case 'lowerCase':
      //ASCII 97-122
      var randLow = randomNumber(97,122)
      passwordArray.push(String.fromCharCode(randLow));
      break;

    //number generation
    case 'numbers':
      // Create Random Number Between 0 and 9
      var randNum = randomNumber(0,9)
      passwordArray.push(randNum);
      break;

    //symbol generation
    default: 
      const symbolOptions = '!@#$%^&*(){}[]=<>/,.'
      var randSym = randomNumber(0,symbolOptions.length);
      passwordArray.push(symbolOptions[randSym])
      break;
  }
}

//-----------------------------------------------
// Generate Passowrd Based on User Input
//-----------------------------------------------
function generatePassword() {

  //check length and assign
  if(lengthEl.value >=8 && lengthEl.value <= 128) {
    length = lengthEl.value;

    for(var i = 0; i < length; i+=4) {
      if (upper === 'true') {
        generateVariable('upperCase');
      }
      
      if (lower === 'true') {
        generateVariable('lowerCase');
      }
    
      if (number === 'true') {
        generateVariable('numbers');
      }
    
      if (symbol === 'true') {
        generateVariable('symbols');
      }
    }
  
    //print to the screen withouth any charecters in array and ensure length is correct since 
    //if odd number is selected length will be too long
    return passwordArray.join("").slice(0,length);
  } else {
    alert("Password length must be between 8 to 128 characters")
  }

}

//-----------------------------------------------
// Popup Box Features
//-----------------------------------------------
function popUp() {
  document.querySelector(".popUp").style.display = "flex";
}

function closePopUp() {
  document.querySelector(".popUp").style.display = "none";
}

//-----------------------------------------------
// Password Options
//-----------------------------------------------
function addLowercase() {
  if(lower === 'false') {
    lower = 'true';
  } else {
    lower = 'false'
  }
}

function addUppercase() {
  if(upper === 'false') {
    upper = 'true';
  } else {
    upper = 'false'
  }
}

function addSymbols() {
  if(symbol === 'false') {
    symbol = 'true';
  } else {
    symbol = 'false'
  }
}

function addNumbers() {
  if(number === 'false') {
    number = 'true';
  } else {
    number = 'false'
  }
}

//-----------------------------------------------
// Initialize
//-----------------------------------------------
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordArray = [] //reset the array
  passwordText.value = password//.slice(0,length); //verify password is correct length

  closePopUp();
}

// Add event listener to generate button
generateBtn.addEventListener("click", popUp);
document.querySelector(".cancel-button").addEventListener("click", closePopUp);
document.querySelector(".generate-now-button").addEventListener("click", writePassword);
