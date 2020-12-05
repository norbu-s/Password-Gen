var lengthmin = 8;
var lengthmax = 128;
var password = "";
var generateEl = document.getElementById('generate');
var resultEl = document.getElementById('result');

var randomFunc = {
  length: generateLength,
	lower: getRandomLowerCase,
	upper: getRandomUpperCase,
	number: getRandomNumber,
  symbol: getRandomSymbol
}

var myJSON = JSON.stringify(randomFunc);
  document.getElementById("demo").innerHTML = myJSON;

function generateLength() {
    var inputValue = prompt("Choose a length of at least 8 characters and no more than 128 characters");
    var length = parseInt(inputValue)
    if (length >= lengthmin && lengthmax <= 128){
      generatePassword()
    }
    else{ alert("Not a valid Input")
    generateLength()
    console.log("??")
  }
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
      var symbolinput = confirm("Do you want the password to include a Symbol?");
      if (symbolinput) true;{
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
      
  function getRandomSymbol() {
      symbolinput[(Math.floor(Math.random() * symbolinput.length))];
      return symbolinput[(Math.floor(Math.random()*symbolinput.length))];
    }

  generate.addEventListener('click', () => {
      var length = +length;
      var hasLower = lowerCaseinput;
      var hasUpper = upperCaseinput;
      var hasNumber = numberInput;
      var hasSymbol = symbolinput;
  resultEl.textarea = generatePassword();
  });

  function writePassword() {
      var password = generatePassword();
      var passwordText = document.querySelector("#resultEl");
      passwordText.value = password;
  }