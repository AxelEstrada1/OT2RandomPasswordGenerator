"use strict";

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

var lowerAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let builtArray = [];
// let generatedLetterIndex = Math.floor(Math.random() * builtArray.length);

function generatePassword() {

  if (confirm("Do you want upper")) {
    builtArray = [...upperAlphabet, ...builtArray];
  }
  if (confirm("Do you want lower")) {
    builtArray = [...lowerAlphabet, ...builtArray];
  }
  if (confirm("Do you want#")) {
    builtArray = [...numbers, ...builtArray];
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