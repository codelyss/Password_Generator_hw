// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");
var chkSpecialChars = document.querySelector("#chkSpecialChars");
var chkNumChars = document.querySelector("#chkNumChars");
var chkLowChars = document.querySelector("#chkLowChars");
var chkUppChars = document.querySelector("#chkUppChars");
var rangeInput = document.querySelector("#rangeInput");
var passwordText = document.querySelector("#password");

// Length (Must be between 8 - 128 characters) 

// Special characters 
var specialChars = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

// Numeric characters 
var numChars = "0123456789";

// Lowercase characters 
var lowChars = "abcdefghijklmnopqrstuvwxyz";

// Uppercase characters 
var uppChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
copyBtn.addEventListener("click", copyToClipboard);

//todo BONUS LISTENER

// Write password to the #password input
function writePassword() {
    var password = generatePassword();

    passwordText.value = password;

    if (password != "") {
        copyBtn.removeAttribute("disabled");
        copyBtn.focus();
    }
}

function generatePassword() {
    var password = "";

    var spChecked = chkSpecialChars.checked;
    var numChecked = chkNumChars.checked;
    var lowChecked = chkLowChars.checked;
    var uppChecked = chkUppChars.checked;

    var specialLength = specialChars.length - 1;
    var numLength = numChars.length - 1;
    var lowLength = lowChars.length - 1;
    var uppLength = uppChars.length - 1;

    if (spChecked || numChecked || lowChecked || uppChecked) {
        var pLength = rangeInput.value;

        while (password.length < pLength) {
            if (spChecked) {
                var rdm = Math.floor((Math.random() * specialLength));
                password += specialChars[rdm];
                if (password.length == pLength) { break; }
            }

            if (numChecked) {
                var rdm = Math.floor((Math.random() * numLength));
                password += numChars[rdm];
                if (password.length == pLength) { break; }
            }

            if (lowChecked) {
                var rdm = Math.floor((Math.random() * lowLength));
                password += lowChars[rdm];
                if (password.length == pLength) { break; }
            }

            if (uppChecked) {
                var rdm = Math.floor((Math.random() * uppLength));
                password += uppChars[rdm];
                if (password.length == pLength) { break; }
            }
        }
    }
    else {
        // user didn't pick any options
        alert("Please select at least one option!");
    }

    return password;
}

function copyToClipboard() {
  /* Select the text field */
  passwordText.select();
  passwordText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");
}