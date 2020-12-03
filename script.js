var generateBtn = document.querySelector("#generate");
var lengthMinEl = "8";
var lengthMaxEl = "128";
var lowercaseEl = "abcdefghijklmnopqrstuvwxyz";
var uppercaseEl = "ABCDEFGHIJKLMNOPQRSTUVWXY";
var numberEl = "0123456789";
var specialCharactersEl = "!@#?$"; 

//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
// what length?, min 8 varchar and max 128 varchar
// alert if below min or =128 or over or invalid type


function generatePassword() {
  let inputValue = prompt("Enter a number between 8 to 128 number");
  var length = parseInt(inputValue);
  if (length < 8 || length > 128) {
    generatePassword();
  } 
  else {
    getRandomLowerCase()
  }
}
 
function getRandomLowerCase() {
  let inputValue = prompt("Do you want Uppercase or Lowercase");
  if (inputValue === "lowercaseEl" || length === "uppercaseEl") {
    getRandomLowerCase()
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
/*if 

// condition here

else

// condition here

function getRandomUpperCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
if 
// condition here

else

// condition here
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
if 
// condition here

else

// condition here
function getRandomSymbol() {
  const symbols = "~!@#$%^&*()_+=-{}|[]\<>?/";
  return symbols[Math.floor(Math.random() * symbols.length)]
}
if 
// condition here

else

// condition here
//DOM elements
var pw = document.getElementById('pw');
var length = document.getElementById('length');
var uppercase = document.getElementById('uppercase');
var lowercase = document.getElementById('lowercase');
var number = document.getElementById('number');
var symbol = document.getElementById('symbol');
var generate = document.getElementById('generate');

//function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  */