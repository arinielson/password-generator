// Assignment Code
var chars = "abcdefghijklmnopqrstuvwxyz";
var numbersChars = "0123456789";
var specialChars = "!@#$%^&*"

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  return 'password here';
}