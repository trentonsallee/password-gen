// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppperCaseEl = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseEl = "abcdefghijklmnopqrstuvwxyz";
var numberEl = "0123456789";
var symbolEl = "!@#$%^&*()?-=+";
var passwordArea = document.querySelector("#password");
generateBtn.addEventListener("click", writePassword);



// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  passwordArea.textContent = password;
}

//Function too generate the password, returns password
function generatePassword() {

  //getting password elements as a bolean
  var upper = document.getElementById("upperCase").checked;
  var lower = document.getElementById("lowerCase").checked;
  var number = document.getElementById("number").checked;
  var symbol = document.getElementById("symbol").checked;

//creating the password elements based on users choice
  let elements = "";
  if (upper == true) {
    elements = uppperCaseEl + elements;
  }
  if (lower == true) {
    elements = lowerCaseEl + elements;
  }
  if (number == true) {
    elements = numberEl + elements;
  }
  if (symbol == true) {
    elements = symbolEl + elements;
  }

  //getting the user length and setting parameters with alerts
  var length = document.querySelector("#userLength");
  var userlength = parseInt(length.value);
  if (userlength > 128) {
    alert("password is too long");
    return;
  }
  if (userlength < 8) {
    alert("password is too short");
    return;
  }
  //gets random values of selected material for the users length choice
var password = "";
  for (let i = 0; i < userlength; i++) {
    var transition = Math.floor(Math.random() * elements.length);
    password += elements[transition];
  }

  return password;
}
