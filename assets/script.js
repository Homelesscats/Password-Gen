// Assignment code here
sa

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");



//Arrays/password criteria

let specialChar = "!@#$%^&*()";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase ="abcdefghijklmnopqrstuvwxyz";
const numeric = "0123456789";






// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);










THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page