// Assignment Code
var generateBtn = document.querySelector("#generate");

// Map of all characters
const characterMap = {
  upperCase: [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ],
  lowerCase: [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ],
  numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  symbols: [
    "!",
    '"',
    "#",
    "$",
    "%",
    "&",
    "'",
    "(",
    ")",
    "*",
    ",",
    "-",
    ".",
    "/",
    ":",
    ";",
    "<",
    "=",
    ">",
    "?",
    "@",
    "[",
    "\\",
    "]",
    "^",
    "_",
    "`",
    "{",
    "|",
    "}",
    "~",
  ],
};

// Generates the password
const generatePassword = () => {
  let randomPassword = "";
  let passwordArray = [];

  // Checks what paramater the user wants
  if (document.querySelector("#upperCase").checked) {
    passwordArray = passwordArray.concat(characterMap.upperCase);
  }
  if (document.querySelector("#lowerCase").checked) {
    passwordArray = passwordArray.concat(characterMap.lowerCase);
  }
  if (document.querySelector("#numbers").checked) {
    passwordArray = passwordArray.concat(characterMap.numbers);
  }
  if (document.querySelector("#symbols").checked) {
    passwordArray = passwordArray.concat(characterMap.symbols);
  }

  // Generates a password based on the length given by user
  for (let i = 0; i < document.querySelector("#passwordLength").value; i++) {
    let randomCharacter = Math.floor(Math.random() * passwordArray.length);

    randomPassword = randomPassword + passwordArray[randomCharacter];
  }

  return randomPassword;
};

// Copy the password
const copyPassword = () => {
  // Get the text field
  var copyText = document.querySelector("#password");

  // Select the text field
  copyText.select();

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Changes the text to let user know it copied
  document.querySelector("#copy").innerHTML = "Password copied!";

  // Changes the text back to "Copy Password"
  setTimeout(() => {
    document.querySelector("#copy").innerHTML = "Copy Password";
  }, 3000);
};

// Write password to the #password input
const writePassword = () => {
  // If none of the boxes are checked, return error
  if (
    !document.querySelector("#upperCase").checked &&
    !document.querySelector("#lowerCase").checked &&
    !document.querySelector("#numbers").checked &&
    !document.querySelector("#symbols").checked
  ) {
    document.querySelector("#password").value = "";
    document.querySelector("#password").placeholder =
      "You must have at least 1 checkbox checked.";
  }
  // If the length is less than 8, return error
  else if (document.querySelector("#passwordLength").value < 8) {
    document.querySelector("#password").value = "";
    document.querySelector("#password").placeholder =
      "Password must be at least 8 characters long.";
  } else {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
