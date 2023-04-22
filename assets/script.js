// Assignment Code
var elements = {
var uppperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase: "abcdefghijklmnopqrstuvwxyz";
var number: "0123456789";
var symbol: "!@#$%^&*()?-=+";
};

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

// Write password to the #password input
function writePassword() {

  var upper = document.getElementById("upperCase").checked;
  var lower = document.getElementById("lowerCase").checked;
  var number = document.getElementById("number").checked;
  var symbol = document.getElementById("symbol").checked;
  if (upper + lower + number + symbol === 0) {
    alert("Please check atleast one box!");
    return;
  }

  var generateBtn = document.querySelector("#generate");
 generateBtn.addEventListener("click", writePassword);


 var password = generatePassword();
 var passwordText = document.querySelector("#password");
  passwordText.value = password;

  const length = document.getElementById("length");
  let password = "";

  if (length > 128){
    alert("password is too long");
    return;
  }
  if (length < 8) {

  alert("password is too short")
  return;
  }

  while (length.value > password.length) {
    let keyToAdd = getKey[Math.floor(Math.random() * getKey.length)];
    let isChecked = document.getElementById(keyToAdd.name).checked;
    if (isChecked) {
      password += keyToAdd();
    }
  }
  passwordBox.innerHTML = password;
}
