//-----------------------------------------------
// Variable Setup
//-----------------------------------------------
var length = 8;
var upper = true;
var lower = true;
var number = true;
var symbol = true;
var passwordArray = [];

//-----------------------------------------------
// Generate Random Variable for Selected Criteria
//-----------------------------------------------
function generateVariable(selector) {
  switch(selector) {
    //uppercase generation
    case 'upperCase':
      passwordArray.push("A");
      break;
    //lowercase generation
    case 'lowerCase':
      passwordArray.push("b");
      break;
    //number generation
    case 'numbers':
      passwordArray.push('3');
      break;

    //symbol generation
    default: 
      passwordArray.push('!')
      break;
  }
}

//-----------------------------------------------
// Randomize Array
//-----------------------------------------------

//-----------------------------------------------
// Generate Passowrd Based on User Input
//-----------------------------------------------
function generatePassword() {
  
  generateVariable('upperCase');
  generateVariable('lowerCase');
  generateVariable('numbers');
  generateVariable('symbols')

  //print to the screen withouth any charecters in array
  return passwordArray.join("");
}

//KEEP ALL OF THIS
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

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