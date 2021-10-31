
//-----------------------------------------------
// Variable Setup
//-----------------------------------------------
var length = 25;
var upper = 'true';
var lower = 'true';
var number = 'true';
var symbol = 'true';
var passwordArray = [];

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
// Randomize & Check Array
//-----------------------------------------------
function Randomize() {

}

//-----------------------------------------------
// Generate Passowrd Based on User Input
//-----------------------------------------------
function generatePassword() {
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

  //randomize password
  Randomize();

  //print to the screen withouth any charecters in array and ensure length is correct since 
  //if odd number is selected length will be too long
  return passwordArray.join("").slice(0,length);
}

//KEEP ALL OF THIS
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordArray = [] //reset the array
  passwordText.value = password//.slice(0,length); //verify password is correct length
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//END OF KEEP ALL OF THIS



// POPUP - 
/*
function openWindow() {
  var i, l, options = [{
     value: 'first',
     text: 'First'
  }, {
     value: 'second',
     text: 'Second'
  }],
  newWindow = window.open("", null, "height=200,width=400,status=yes,toolbar=no,menubar=no,location=no");  

  newWindow.document.write("<select onchange='window.opener.setValue(this.value);'>");
  for(i=0,l=options.length; i<l; i++) {
      newWindow.document.write("<option value='"+options[i].value+"'>");  
      newWindow.document.write(options[i].text);  
      newWindow.document.write("</option>");
  }
  newWindow.document.write("</select>");
}
*/