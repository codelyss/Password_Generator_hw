// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");

// Write password to the #password input
function writePassword() {
     var password = generatePassword();
     var passwordText = document.querySelector("#password");

     passwordText.value = password;

     copyBtn.removeAttribute("disabled");
     copyBtn.focus();
}

// Length (Must be between 8 - 128 characters) 

// Special characters 
var specialChars = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

// Numeric characters 
var numChars = "0123456789";

// Lowercase characters 
var lowChars = "abcdefghijklmnopqrstuvwxyz";

// Uppercase characters 
var uppChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


function copyToClipboard() {
    // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER