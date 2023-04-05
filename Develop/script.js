// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

let lowerAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let upperAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


function generatePassword() {

  var x = confirm("Do you want your password to contain lowercase letter?");
  if (x = true) {
    var x = confirm("Do you want your password to contain uppercase letters?");
    if (x = true) {
      var x = confirm("Do you want your password to contain numbers?");
      if (x = true) {

        function writePassword() {
          var characters =
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
          var password = "";
          for (var i = 0; i < passwordLength; i++) {
            var randomNumber = Math.floor(Math.random() * passwordLength);
            password += characters.substring(randomNumber, randomNumber + 1);
          }
        }
        // let password = "";
        // let passwordLength = prompt("How many characters do you want your password to have?");
        // for (let i = 0; i < passwordLength; i++) {
        //   password += password.substring(upperAlphabet, lowerAlphabet, numbers);
        // }
        // return password;
        // function writePassword() {
        //   var password = generatePassword();
        //   var passwordText = document.querySelector("#password");

        //   passwordText.value = password;

      }
    }
  }
}
}
  else if (x = false) {
  var x = confirm("Do you want your password to contain uppercase letters?");
  if (x = true) {
    var x = confirm("Do you want your password to contain numbers?");
    if (x = true) {
      let password = "";
      let passwordLength = prompt("How many characters do you want your password to have?");
      for (let i = 0; i < passwordLength; i++) {
        password += "";
      }
      return password;
      function writePassword() {
        var password = generatePassword();
        var passwordText = document.querySelector("#password");

        passwordText.value = password;

      }
    }
  }
}
else if (x = false) {
  var x = confirm("Do you want your password to contain numbers?");
  if (x = true) {
    let password = "";
    let passwordLength = prompt("How many characters do you want your password to have?");
    for (let i = 0; i < passwordLength; i++) {
      password += "";
    }
    return password;
    function writePassword() {
      var password = generatePassword();
      var passwordText = document.querySelector("#password");

      passwordText.value = password;

    }
  }
}
else if ("") {
  let password = "";
  let passwordLength = prompt("How");
  for (let i = 0; i < passwordLength; i++) {
    password += "";
  }
  return password;
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

  }
}
  // if (confirm("Do you want your password to contain lowercse letters?")) {
  //   if (confirm("Do you want your password to contain uppercase letters?")) {
  //     if (confirm("Do you want your password to contain numbers?")) {

  //     }
  //   }
  //   else {
  //     confirm("Do you want your password to contain uppercase letters?");
  //   }
  // }


  // let password = "";

  // let passwordLength = prompt("How many characters do you want your password to have?")
  // for (let i = 0; i < passwordLength; i++) {


  //   password += "x";
  // }

  // return password;
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
