var lengthmin = 8;
var lengthmax = 128;
var generatedPassword = "";
var generateEl = document.getElementById('generate');
var resultEl = document.getElementById('result');

var randomFunc = {
	lower: getRandomLowerCase,
	upper: getRandomUpperCase,
	number: getRandomNumber,
  symbol: getRandomSymbol
}

function generateLength() {
    var inputValue = prompt("Choose a length of at least 8 characters and no more than 128 characters");
    var length = parseInt(inputValue)
    if (length >= lengthmin && lengthmax <= 128){
      generatePassword()
    }
    else{ alert("Not a valid Input")
    generateLength()
  }
}

for(let i=0; i<length; i++) {
  typesArr.forEach(type => {
  var funcName = Object.keys(type)[0];
  generatedPassword += randomFunc[funcName]();
  });
}

function generatePassword(){
      var lowerCaseinput = confirm("Do you want the password to include a Lowercase?");
      if (lowerCaseinput) true;{
      getRandomLowerCase()
  } 
      var upperCaseinput = confirm("Do you want the password to include a Uppercase?");
      if  (upperCaseinput) true;{
      getRandomUpperCase()
  }
      var numberInput = confirm ("Do you want the password to include a Number?");
      if (numberInput) true;{
      getRandomNumber()
  }
      var specialCharacterinput = confirm("Do you want the password to include a Symbol?");
      if (specialCharacterinput) true;{
      getRandomSymbol()
  }
};

  function getRandomLowerCase() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
    
  function getRandomUpperCase() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }

  function getRandomNumber() {
      return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }
      
  function getRandomSymbol(){
    specialCharacterinput[(Math.floor(Math.random() * specialCharacterinput.length))];
      return specialCharacterinput[(Math.floor(Math.random()*specialCharacterinput.length))];
    }

  generate.addEventListener('click', () => {
    resultEl.textarea = generatePassword();
  });
  
  writePassword()

  function writePassword() {
      var password = generatePassword();
      var passwordText = document.querySelector("#password");
      passwordText.value = password;
  }