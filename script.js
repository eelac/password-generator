// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array of all characters
const allCharacters = [
  [
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
  ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  [
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
  [
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
];

// Generates the password
const generatePassword = () => {
  let randomPassword = "";

  // Generates a password based on the length given by user
  for (let i = 0; i < document.getElementById("passwordLength").value; i++) {
    let firstArray = Math.floor(Math.random() * allCharacters.length);
    let secondArray = Math.floor(
      Math.random() * allCharacters[firstArray].length
    );
    randomPassword = randomPassword + allCharacters[firstArray][secondArray];
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
  //If the length is less than 8, return error
  if (document.querySelector("#passwordLength").value < 8) {
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
