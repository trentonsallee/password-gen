
// Assignment Code
var uppperCaseEl = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseEl = "abcdefghijklmnopqrstuvwxyz";
var numberEl = "0123456789";
var symbolEl = "!@#$%^&*()?-=+";


/*
var getElements = {
 
  function uppperCase() {
    return elements.uppperCase[Math.floor(Math.random() * elements.upperCase.length)];
  },
  function lowerCase() {
    return elements.lowerCase[Math.floor(Math.random() * elements.lowerCase.length)];
  },
  function uppperCase() {
    return elements.number[Math.floor(Math.random() * elements.number.length)];
  },
  function uppperCase() {
    return elements.symbol[Math.floor(Math.random() * elements.symbol.length)];
  },  
}
*/

// Write password to the #password input
function writePassword() {
  let password = generatePassword();


  
}

function generatePassword() {

  var upper = document.getElementById("upperCaseEl").checked;
  var lower = document.getElementById("lowerCaseEl").checked;
  var number = document.getElementById("numberEl").checked;
  var symbol = document.getElementById("symbolEl").checked;
  /*
  if (upper + lower + number + symbol === 0) {
    alert("Please check atleast one box!");
    return;
  }
  */

//creates a string of desired characters to be used in the password
let elements = "";
if (upper == true){
elements = uppperCaseEl + elements;
}
if (lower == true){
elements = lowerCaseEl + elements;
}
if (number == true) {
    elements = numberEl + elements;
  }
if (symbol == true){
  elements = symbolEl + elements;
}


  var generateBtn = document.querySelector("#generate");
 generateBtn.addEventListener("click", writePassword);

  password = generatePassword();
 var passwordText = document.querySelector("#password");
  passwordText.value = password;

  var userlength = document.querySelector("UserLength")

  if (userlength > 128){
    alert("password is too long");
    return;
  }
  if (userlength < 8) {

  alert("password is too short")
  return;
  }


for (let i = 0; i < userlength; i++) {
  var transition = Math.floor(math.random() * elements.length);
  password += transition[transition];
}

return password;
};

/*
  while (userlength > password.length) {
    let keyToAdd = getKey[Math.floor(Math.random() * getKey.length)];
    let isChecked = document.getElementById(keyToAdd.name).checked;
    if (isChecked) {
      password += keyToAdd();
    }
  }
  */
  // passwordBox.innerHTML = password;

