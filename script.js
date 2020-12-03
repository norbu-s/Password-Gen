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
    getRandomLowerCase();
  }
  else{ alert("Not a valid Input")
  generateLength()
 }
// }
}

// function getRandomUpperCase() {
//   let upperCaseEl = prompt("Do you want the password to include a Lowercase.Please enter 'yes' or 'no'");
//   if (upperCaseEl === "YES" || upperCaseEl === "NO")
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
//   getRandomUpperCase();
//   console.log(upperCaseEl)
//   }
//  getRandomLowerCase();
// }  
// else {
//    getRandomLowerCase();
//  }
// }

// function getRandomLowerCase() {
// let lowerCaseEl = confirm("Do you want the password to include a Lowercase.");
// if (lowerCaseEl === "confirm");
// return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// console.log("getRandomLowerCase")
// }



//     getRandomUpperCase();
//     else {
//     getRandomLowerCase();
//     console.log("generatePassword")
//     }
//    }

//    function getRandomUpperCase() {
//     let inputValue = prompt("Do you want the password to include a Lowercase. Please enter 'YES' or 'NO'");
//     if (inputValue === "YES" || inputValue === "NO") 
//     return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
//       getRandomNumber();
//       else {
//         getRandomUpperCase();
//       console.log("getRandomUpperCase")
//       }
//      }
  

//      function getRandomNumber() {
//       let inputValue = prompt("Do you want to include a number?Please enter 'yes' or 'no'");
//        if (inputValue === "yes" || "no") 
//        return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
//        getRandomSymbol() {
//         else {
//           getRandomNumber();
//         console.log("getRandomNumber")
//         }
//        }
//       }
// function getRandomLowerCase() {
//    let inputValue = prompt("Do you want it Lowercase");
//    if (inputValue === "lowerCaseEl"); 
//    return String.fromCharCode(Math.floor(Math.random() * 26) + 97){
//     getRandomLowerCase();
//     Console.log("getRandomLowerCase")
//    }
//    else {
//     getRandomUpperCase()
//   }
// }
 
// function getRandomUpperCase() {
//   let inputValue = prompt("Do you want Uppercase ");
//   if (inputValue === "upperCaseEl") 
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);{
//    getRandomLowerCase();
//   else {
//     getRandomUpperCase()
//  }
// }

// function getRandomNumber() {
//   let inputValue = prompt("Do you want to include a number");
//   if (inputValue === "numberEl") 
//   return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
//   getRandomNumber();
//  else {
//   getRandomSymbol()
//  }
// }

// function getRandomSymbol() {
//   let inputValue = prompt("Do you want to include a special Character");
//   if (inputValue === "numberEl") 
//   const symbols = "~!@#$%^&*()_+=-{}|[]\<>?/";
//   return symbols[Math.floor(Math.random() * symbols.length)]
//  } 
//  else {
//   getRandomSymbol()
//  }
// }

//  condition here
// //DOM elements
// var pw = document.getElementById('pw');
// var length = document.getElementById('length');
// var uppercase = document.getElementById('uppercase');
// var lowercase = document.getElementById('lowercase');
// var number = document.getElementById('number');
// var symbol = document.getElementById('symbol');
// var generate = document.getElementById('generate');

// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }