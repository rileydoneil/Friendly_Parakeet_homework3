var userPassword = [];

// Assignment Code
var generateBtn = document.querySelector("#generate");

const generatePassword = function () {
  userPassword = [];
  const userLength = prompt("How long would you like your password? (Min. 8 characters/Max. 128 characters)");
  if (userLength < 8 || userLength > 128) {
      alert("You must choose a valid option");
      //Can I call back the original function here?
      return;
    }  
  const lowerCase = confirm("Would you like lowercase characters?");
  const upperCase = confirm("Would you like uppercase characters?");
  const specialCase = confirm("Would you like special  characters?");
  const numbericCase = confirm("Would you like numberic characters?");
  while (userPassword.length != userLength){
    let decision = Math.floor(4 * Math.random());
    if (lowerCase && decision == 1) {
        userPassword.push(randomChar());
    }
    if (upperCase && decision == 2) {
      userPassword.push(randomChar().toUpperCase());
    }
    if (specialCase && decision == 3) {
      userPassword.push(randomSpecialChar());
    }
    if (numbericCase && decision == 0) {
      userPassword.push(randomNumberic());
    }
  }
  //returns the array as a string
  return userPassword.join('');
  // var userPasswordText;
  // userPassword.forEach(function(element) {
  //   userPasswordText += userPassword[element];
  // });
  // return userPasswordText;
  // for(i = 0; i < userPassword.length(); i++) {
  //   userPasswordText += userPassword[i];
  // }
  // return userPasswordText;
}

//https://stackoverflow.com/questions/47719167/random-special-character-with-js-regex 
//THis is an interesting way to randomly pull a random character from one of my strings instea of using an array like my original plan
//I was planning on doing something similar but hardcding the 

function randomSpecialChar () {
  // example set of special chars as a string in no particular order
  var specialChar = "!\"§$%&/()=?\u{20ac}";

  // generating a random index into the string and extracting the character at that position
  return specialChar.substr(Math.floor(specialChar.length*Math.random()), 1);
} 

function randomChar () {
  // example set of special chars as a string in no particular order
  var lowerChar = "abcdefghijklmnopqrstuvwxyz";

  // generating a random index into the string and extracting the character at that position
  return lowerChar.substr(Math.floor(lowerChar.length*Math.random()), 1);
} 

function randomUpperChar () {
  // example set of special chars as a string in no particular order
  var upperChar = "!\"§$%&/()=?\u{20ac}";

  // generating a random index into the string and extracting the character at that position
  return upperChar.substr(Math.floor(upperChar.length*Math.random()), 1);
} 

function randomNumberic () {
  // example set of special chars as a string in no particular order
  var numberic = "123456789";

  // generating a random index into the string and extracting the character at that position
  return numberic.substr(Math.floor(numberic.length*Math.random()), 1);
} 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
