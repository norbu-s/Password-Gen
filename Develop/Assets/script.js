//DOM elements
var pw = document.getElementById('pw');
var length = document.getElementById('length');
var uppercase = document.getElementById('uppercase');
var lowercase = document.getElementById('lowercase');
var number = document.getElementById('number');
var symbol = document.getElementById('symbol');
var generate = document.getElementById('generate');

var passwordGen ={
  lower: getRandomLowerCase,
  upper: getRandomUpperCase,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

function ping() {
  var password = confirm prompt ("Enter a password length")
//function to check password length//
};

if confirm (prompt ("Enter UpperCase or Lowercase"));

  
/*pw.innerText = generatePassword(
  hasLower, 
  hasUpper, 
  hasNumber, 
  hasSymbol, 
  length
  );*/

//Generate password  function
function generatePassword(lower, upper,number,symbol, length) {
// 1. Init pw variable
// 2. loop over length call generator function for each type.
// 3. Add final pw to the pw var and return.


//let generatePassword = "";

const typeCount = lower + upper + number + symbol;

console.log("typesCount: ", typesCount);

const typeArr = [lowere, upper, number, symbol]
}

//for(let i =0; i < length; i =+)
//Generator  functions
function getRandomLowerCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpperCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "~!@#$%^&*()_+=-{}|[]\<>?/";
  return symbols[Math.floor(Math.random() * symbols.length)]
}



// Add event listener to generate button
//generate.addEventListener("click", writePassword);
