
// get the move the player typed
const playerMove = process.argv[2];

if (!playerMove) {
  console.log("Please type rock, paper or scissors after the file name!");
  console.log("Example: node rockPaperScissors.js rock");
  process.exit();
}

// make everything lowercase so it works if someone types ROCK
const move = playerMove.toLowerCase();

const moves = ["rock", "paper", "scissors"];

// check if the move is one of the 3 valid ones
if (!moves.includes(move)) {
  console.log("That’s not a valid move. Please choose rock, paper, or scissors.");
  process.exit();
}

// make a random move for the computer
const randomNumber = Math.floor(Math.random() * 3);
const computerMove = moves[randomNumber];

// figure out who wins
let result = "";

if (move === computerMove) {
  result = "Damn, it's a draw!";
} else if (
  (move === "rock" && computerMove === "scissors") ||
  (move === "paper" && computerMove === "rock") ||
  (move === "scissors" && computerMove === "paper")
) {
  result = "OMG you're a winner!";
} else {
  result = "HAHA you're a loser!";
}

// show the result
console.log("You chose " + move + ".");
console.log("Computer chose " + computerMove + ".");
console.log(result);
