// Assignment Code
var lowercaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*"];

var passwordText = document.getElementById("password");
var generateBtn = document.querySelector("#generate");

function generatePassword() {
// Prompts 
do {
  var passwordLength = parseInt(window.prompt("Enter a password length between 8 and 128", ""))
  }while(isNaN(passwordLength) || passwordLength > 128 || passwordLength < 8);
   
  var chars = [];
    if (confirm("Would you like to include lowercase characters?") == true) {
      chars = chars.concat(lowercaseChars);    
    }
      
    if (confirm("Would you like to include uppercase characters?") == true) {
      chars = chars.concat(uppercaseChars);
    }
    
    if (confirm("Would you like to include number characters?") == true) {
      chars = chars.concat(numberChars);
    }
    
    if (confirm("Would you like to include special characters?") == true) {
      chars = chars.concat(specialChars);
    } 
    console.log(chars);
  // Password
    var passwordChars = "";
    for(var i = 0; i < passwordLength; i++) {
      console.log(chars[Math.floor(Math.random() * chars.length - 1)]);
      passwordChars = passwordChars + chars[Math.floor(Math.random() * chars.length - 1)];    
    }
    console.log(passwordChars);
    return passwordChars;  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);