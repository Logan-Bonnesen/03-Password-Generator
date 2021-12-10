
// // Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var upper = ["A","B","D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var symbol = ["!","@", "#", "$", "%", "^", "&", "*", "(", ")", "=", "+"];
var answer = "";
var charset = "";


window.onload=alert("Please click Generate Password to start.");

function generatePassword (){
var passwordLength = window.prompt("How many characters in your password?");
console.log(passwordLength)

if (passwordLength < 8 || passwordLength > 128){
  window.alert("Password Length Invalid")
  generatePassword()

}

var userUpper = window.confirm("Do you want to use upper case letters?");
if (userUpper === true){
  answer += upper
} else if (userUpper === false) {
  answer;
  console.log(answer)
}

var userLower = window.confirm("Do you want to use lower case letters?");
if (userLower === true){
  answer += lower
} else if (userLower === false) {
  answer;
  console.log(answer)
}

var userNumber = window.confirm("Do you want to use numbers?");
if (userNumber === true){
  answer += number
} else if (userNumber === false){
  answer;
  console.log(answer)
}

var userSymbol = window.confirm("Do you want to use special characters?")
if (userSymbol === true){
  answer += symbol
} else if (userSymbol === false){
  answer;
  console.log(answer)
}


// for ( i = 0; i < passwordLength; i++) {
//   passwordAnswer = Math.floor(Math.random() * .length)
// }


}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
