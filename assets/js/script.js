// Assignment code here



// password criteria function
var passwordCriteria = function(){
  criteriaConfrim = confirm("Do you want to set a password Criteria?");
  if (criteriaConfrim) {
    criteriaChoice = prompt("Please choose which password criteria you want to work on first: \n1 for Password Length \n2 for Password Character")
    criteriaChoice = parseInt(criteriaChoice)
    switch(criteriaChoice){
      case 1:
        //launch the password length function
        passwordLength();
      // case 2:
      //   passwordCharacter();
        //launch the password Character fuction
    }
  }
}

// password length function
var passwordLength = function(){
  wordLength = prompt("How long do you want your Password to be? \nPlease pick a number between 8 and 128");
  wordLength = parseInt(wordLength);
  if (wordLength<8 || wordLength>128){
    alert("You are not following directions, we will ask you again");
    passwordLength();
  }else if (!(wordLength) || wordLength === "" || wordLength == null){
    confirmQuit = confirm("You either hit cancel or entered no value, Do you want to quit?")
    if (confirmQuit){
      return true
    }else{
      passwordLength();
    }
  }
return wordLength;
}


var passwordCharacter = function(){
  var characterPicked = prompt("which special char do you want to use ");
  return characterPicked;

}
// password Character types to include

var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
var wordLength = 0;

//generate password function
var generatePassword = function(){
  passwordCriteria();
  var securePassword = "";
  console.log(wordLength)
  for (var i=0; i<wordLength;i++){
    securePassword += alphabet.charAt(Math.random()* alphabet.length);
  }
  console.log(securePassword);
  return securePassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var securePassword = generatePassword();
  console.log(securePassword)
  var passwordText = document.querySelector("#password");
  passwordText.value = securePassword;
  console.log(passwordText.value)
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);