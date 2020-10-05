// Get a Random Integer

function getRandomInt(n) {
  return Math.floor(Math.random() * n);
}

// Shuffle the string
function randomizeString(pass) {
  var arr = pass.split('');           // Convert String to array
  var n = arr.length;              // Length of the array
  
  for(var i=0 ; i<n-1 ; ++i) {
    var j = getRandomInt(n);       // Get random of [0, n-1]
    
    var temp = arr[i];             // Swap arr[i] and arr[j]
    arr[i] = arr[j];
    arr[j] = temp;
  }
  
  pass = arr.join('');                // Convert Array to string
  return pass;                        // Return shuffled string
}

// password criteria function
var passwordCriteria = function(){
  criteriaConfrim = confirm("Do you want to set a password Criteria?");
  if (criteriaConfrim) {
    criteriaChoice = prompt("Please choose a password criteria to customize your Password:" +
    "\n1 : Password Length" +
    "\n2 : Password Character" +
    "\n3 : Feeling Lazy ... just want us to create a Secure Password with Random values?");
    criteriaChoice = parseInt(criteriaChoice);
    switch(criteriaChoice){
      case 1:
        //launch the password length function
        LengthOfPassword();
        alert("Every Password needs a couple of Characters, so lets choose some");
        passwordCharacter();
        break;
      case 2:
        //launch the password Character fuction
        passwordCharacter();
        alert("Lets pick the length of you password now");
        LengthOfPassword();
        break;
      case 3:
        passwordLength = Math.floor(Math.random() * 128 +8);
        passwordCriteriaCharacters = "";
        alert("Random values will be assigned to Password Length and random Characters will be chosen");
        break;
      default:
        alert("You didn't pick a valid option.Try Again.")
        passwordCriteria();
    }
  }else{
    passwordLength = Math.floor(Math.random() * 128 +8);
    passwordCriteriaCharacters = ""
    alert("Random values will be assigned to Password Length and random Characters will be chosen");
  }
}

// password length function
var LengthOfPassword = function(){
  // asking user input for the length of the password
  passwordLength = prompt("How long do you want your Password to be? \nPlease pick a number between 8 and 128\n (Default Value : 10)");
  // converting the length to be an integer
  passwordLength = parseInt(passwordLength);
  // Checking if the directions given were followed as in the user picked the right number
  if (passwordLength<8 || passwordLength>128){
    alert("You are not following directions, we will ask you again");
    LengthOfPassword();
  // Making sure that the generate quits gracefully  
  }else if (!(passwordLength) || passwordLength === "" || passwordLength == null){
    confirmCancel = confirm("You either hit cancel or entered no value, Do you want to assign default value : 10?")
    if (confirmCancel){
      passwordLength = 10
    }else{
      LengthOfPassword();
    }
  }
return passwordLength;
}
var confirmToAddMoreCharfunction = function(){
  confirmToAddMoreChar= confirm("would you like to add more character types?");
  if (confirmToAddMoreChar){
    passwordCharacter()
  }else{
    break;
  }
}
var passwordCharacter = function(){

  var characterTypeChoice= prompt("Please choose which special character type you would like in your Secure Password:"+
  "\n1 : LowerCase" +
  "\n2 : UpperCase" +
  "\n3 : Numerical" +
  "\n4 : Special Characters");

  characterTypeChoice = parseInt(characterTypeChoice);
  var confirmToAddMoreChar = true;

  switch(characterTypeChoice){
    case 1:
      var lowerCaseChar = prompt("Please enter the lower case letter that you want in your Secure Password:");
      passwordCriteriaCharacters += lowerCaseChar;
      confirmToAddMoreCharfunction();
      break;
    default:
      window.alert("You did not pick a valid option. Try again.");
      passwordCharacter();
      break;
  }

  return passwordCriteriaCharacters;

}
// setup up all different character types
var alphabetLowerCase = "abcdefghijklmnopqrstuvwxyz";
var alphabetUpperCase = alphabetLowerCase.toUpperCase();
var numbersChars = "0123456789";
var specialChars =  "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
var passwordLength = 0;
var passwordCriteriaCharacters = ""
var securePassword = "";

// the Full entireset
fullCharacterSet = alphabetLowerCase + alphabetUpperCase + numbersChars + specialChars

//generate password function
var generatePassword = function(){
  passwordCriteria();
  securePassword += passwordCriteriaCharacters
  // getting a random set of character + the characters that we have already gone over
  for (var i=0; i<passwordLength;i++){
    securePassword += fullCharacterSet.charAt(Math.random()* fullCharacterSet.length);
  }
  securePassword = randomizeString(securePassword)
  return securePassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function newFunction() {
  return true;
}

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