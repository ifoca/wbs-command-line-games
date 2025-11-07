// Slice the path to node and path to js file from the arguments array
const args = process.argv.slice(2);

// define choice options
const choices = ['rock', 'paper', 'scissors'];

// choose a random index of the array
const randomIndex = Math.floor(Math.random() * choices.length);

// assign the random choice as the first command line argument
args[0] = choices[randomIndex];

// Make sure there are 2 line arguments provided
if (args.length !== 2) {
  console.error('Please provide two command line arguments.');
  return;
}

// Verify the validity of user's option
let choiceExists = false;

for (let i = 0; i < choices.length; i++) {
  if (args[1] === choices[i]) {
    choiceExists = true;
    break; // stop the loop once a match was found
  }
}
// If user's choice is not one of the option in the array, exit
if (!choiceExists) {
  console.log(`Choose one of the following options: ${choices.join(', ')}`);
  return;
}

// Add logic for draw
if (args[0] === args[1]) {
  console.log("It's a draw! Play again.");
}

// Add logic to decide the winner
if (args[0] === 'rock' && args[1] === 'scissors') {
  console.log('Broken scissors. Computer wins!');
} else if (args[0] === 'rock' && args[1] === 'paper') {
  console.log('Paper covers rock. You win!');
} else if (args[0] === 'paper' && args[1] === 'rock') {
  console.log('Paper covers rock. Computer wins!');
} else if (args[0] === 'paper' && args[1] === 'scissors') {
  console.log('Scissors cuts paper. You win!');
} else if (args[0] === 'scissors' && args[1] === 'rock') {
  console.log('Broken scissors. You win!');
} else if (args[0] === 'scissors' && args[1] === 'paper') {
  console.log('Scissors cuts paper. Computer wins!');
}
