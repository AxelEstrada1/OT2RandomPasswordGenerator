// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

var lowerAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ['!', '@', '#', '$', '%', '^', '&', '*']
let builtArray = [];

function generatePassword() {

  builtArray = [];
  console.log(builtArray);

  if (confirm("Include uppercase letters in your password?")) {
    builtArray = [...upperAlphabet, ...builtArray];
  }
  if (confirm("Include lowercase letters in your password?")) {
    builtArray = [...lowerAlphabet, ...builtArray];
  }
  if (confirm("Include numbers in your passcode?")) {
    builtArray = [...numbers, ...builtArray];
  }
  if (confirm("Include special characters in your password?")) {
    builtArray = [...specialChar, ...builtArray];
  }
  console.log(builtArray);
  let password = "";
  let passwordLength = prompt("How long do you want your password?");

  for (let i = 0; i < passwordLength; i++) {
    let generatedLetterIndex = Math.floor(Math.random() * builtArray.length);
    console.log(generatedLetterIndex);
    console.log(builtArray[generatedLetterIndex])
    password += builtArray[generatedLetterIndex];
  }

  return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
