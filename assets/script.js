// Assignment code here





// Get references to the #generate element
const generateBtn = document.querySelector("#generate");


//Arrays/password criteria

const specialChar = "!@#$%^&*()";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase ="abcdefghijklmnopqrstuvwxyz";
const numeric = "0123456789";
let charPool = 


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


function generatePassword(){
  //user prompted for pw criteria 
  
//step 2 - Make criteria selectable (use something like an alert)
//step 3 - Ask user for input on length of password; between 8 - 128
//step 4 - Confirm character types; Uppercase, Lowercase, Number, Special
//step 5 - check character types, make sure one type is at least selected
console.log("button has been clicked");
alert("I am an alert box!");
var hasUpper = confirm("do you want uppercase?");
console.log(hasUpper);
var hasLower = confirm("do you want case?");
console.log(hasUpper);
}


