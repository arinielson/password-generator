// Assignment Code
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChars = "0123456789";
var specialChars = "!@#$%^&*";

var passwordText = document.getElementById("password");
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
//Prompts 
do {
var passwordLength = parseInt(window.prompt("Enter a password length between 8 and 128", ""))
}while(isNaN(passwordLength) || passwordLength > 128 || passwordLength < 8);
 
var chars = "";
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

  var passwordChars = "";
  for(var i = 0; i < passwordLength; i++) {
    passwordChars += chars.charAt[Math.floor(Math.random() * chars.passwordLength)];    
  }
  return passwordChars;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);