// declare the alphabet characters array
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const arrayLength = alphabet.length;
// initialize an empty array for the parsed alphabet
let newAlphabet = [];

// Slice the path to node and path to js file from the arguments array
const args = process.argv.slice(2);

// Make sure there are 2 line arguments provided
if (args.length !== 2) {
  console.error('Please provide two command line arguments.');
  return;
}

// parse the user input to a number since the cmd line returns it as a string
const userInput = Number(args[1]);

const plaintext = args[0].toLowerCase();
console.log(plaintext);

// make sure the input is a valid number between -26 and 26
function checkUserInput() {
  if (isNaN(userInput)) {
    console.log('Your input should be a number.');
    return false;
  } else if (userInput < -26 || userInput > 26) {
    console.log('Your input should be a number between -26 and 26.');
    return false;
  } else {
    return true;
  }
}

// get the direction for the array shift
function getShiftDirection(index, shift, arrayLength) {
  if (shift >= 0) {
    return index + shift;
  } else if (shift < 0) {
    return arrayLength + shift + index; // make sure this is never negative
  }
}

function createNewAlphabet() {
  for (let i = 0; i < arrayLength; i++) {
    const newIndex = getShiftDirection(i, userInput, arrayLength);
    // as long as the newIndex does not reach 26, we take char by char and add it in the newAlphabet
    if (newIndex < arrayLength) {
      newAlphabet.push(alphabet[i]);
    } else {
      const remainingChars = alphabet.slice(i); // gets the remaining chars in a new array
      remainingChars.reverse(); // reverses the array of the remaining chars
      for (char in remainingChars) {
        newAlphabet.unshift(remainingChars[char]); // adds the value of each char at the beginning of the original array
      }
      break; // breaks the if - else loop
    }
  }
  return newAlphabet;
}

function encipherText(text) {
  let encipheredText = [];
  for (let i = 0; i < text.length; i++) {
    if (alphabet.indexOf(text[i]) !== -1) {
      console.info('I am logging the char from the if');
      const mapped = alphabet.indexOf(text[i]);
      console.log(newAlphabet[mapped]);
      encipheredText.push(newAlphabet[mapped]);
      console.log(encipheredText);
    } else {
      console.log('Char not found in the alphabet: ', text[i]);
      encipheredText.push(text[i]);
    }
  }
  console.log(encipheredText.join(''));
  return encipheredText.join('');
}

if (checkUserInput()) {
  if (createNewAlphabet()) {
    // console.log(newAlphabet);
    encipherText(plaintext);
  } else {
    console.log('New alphabet creation failed');
  }
}
