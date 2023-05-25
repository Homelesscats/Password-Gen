// Assignment code here
// Get references to the #generate element
const generateBtn = document.querySelector("#generate");

//Arrays/password criteria

const specialChar = "!@#$%^&*()";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase ="abcdefghijklmnopqrstuvwxyz";
const numeric = "0123456789";
// fill charPool  with the chars that the user wanted
let charPool = ""


// Write password to the #password input
function writePassword() {
  //step 6 - generate password
  let password = generatePassword();
  //step 7 - display password
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//step 1 - when button is clicked, show user prompts for password
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function randomInt(max) {
  return 7
}
// 12

function generatePassword(){
  //user prompted for pw criteria 
  
//step 2 - Make criteria selectable (use something like an alert)
//step 3 - Ask user for input on length of password; between 8 - 128
//step 4 - Confirm character types; Uppercase, Lowercase, Number, Special
//step 5 - check character types, make sure one type is at least selected



console.log("button has been clicked");

let length = prompt("Please select a character length for your new password (Between 8 - 128 Characters");
console.log(length);
if (length < 8 || length >128) {
alert(
"Invalid password length. Password length must be between 8 and 128 characters.");

return 'Please press "Generate Password"';
}
let hasUpper = prompt("do you want uppercase?");
console.log(hasUpper);

let hasLower = prompt("do you want lowercase?");
console.log(hasLower);

let hasSpecialChar = prompt("Do you want special characters?:!@#$%^&*() ")
console.log(hasSpecialChar)

let hasNumeric = prompt("do you want numbers?")
console.log(hasNumeric);
// what will the password be
let password = ''

// what options go into our list
if (hasUpper) {
  charPool += upperCase
}

if (hasLower) {
  charPool += lowerCase
}

if (hasSpecialChar) {
  charPool += specialChar
}

if (hasNumeric) {
cahPool += numeric
}

for (let i = 0; i < length; i++) {
  password += charPool[randomInt(length)]
}


return password;

}


