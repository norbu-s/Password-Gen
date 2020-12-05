var generateBtn = document.querySelector("#generate");
var lengthEl = "length";
var lowerCaseEl = "abcdefghijklmnopqrstuvwxyz";
var upperCaseEl = "ABCDEFGHIJKLMNOPQRSTUVWXY";
var numberEl = "0123456789";
var specialCharactersEl = "~!@#$%^&*()_+=-{}|[]\<>?/"; 

function generateLength() {
  let inputValue = prompt("Choose a length of at least 8 characters and no more than 128 characters");
  let length = parseInt(inputValue);
  if (length >= 8 && length <= 128){
    generatePassword(inputValue)
  }
  else{ alert("Not a valid Input")
  generateLength()
 }
}

function generatePassword(){
  
    let lowerCase = confirm("Do you want the password to include a Lowercase?");
    if (lowerCase) true;{
      getRandomLowerCase()
      console.log(lowerCase)
    } 

    let upperCase = confirm("Do you want the password to include a Uppercase?")
    if  (upperCase) true;{
      getRandomUpperCase(upperCase)
      console.log()
    }

    let number = confirm ("Do you want the password to include a number?")
    if (number) true;{
      getRandomNumber(number)
    }
  }

    let specialCharacter = confirm("Do you want the password to include a number?")
    if (specialCharacter) true;{
      getRandomSymbol(specialCharacter)
    }
  
    function getRandomLowerCase() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
      console.log(getRandomLowerCase)
      }
    

    function getRandomUpperCase() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
      }

    function getRandomNumber() {
      return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
      console.log(getRandomNumber)
      }
      

    function getRandomSymbol () {
      let inputValue = prompt("Do you want to include a special Character");
      const symbols = "~!@#$%^&*()_+=-{}|[]\<>?/";
      return symbols[Math.floor(Math.random() * symbols.length)];
      console.log(getRandomSymbol)
    }

//DOM elements
var pw = document.getElementById('pw');
var length = document.getElementById('length');
var uppercase = document.getElementById('uppercase');
var lowercase = document.getElementById('lowercase');
var number = document.getElementById('number');
var symbol = document.getElementById('symbol');
var generate = document.getElementById('generate');

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}