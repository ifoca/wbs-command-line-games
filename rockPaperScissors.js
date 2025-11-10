// Players input from commandline
const playersMove =Process.argv[2]?.tolowerCase();
const moves=  ["rock", "paper", "scissors"];
const gameMove = moves.find(moves => moves===playersMove);
if (gameMove){
   console.log(" invalid move, use ,rock, paper, scissors");
   
   }
   else {
      const computerMove =moves[Math.floor(Math.random()* moves.length)];
      console.log('playChose: ${playerMove}');
      console.log('computerChose: ${computerMove}');
   }
if (playersMove ===computerMove)
console.log ('it is a draw');
  
   

else if (playersMove === "rock" && computerMove=== "paper") {
      console.log(" play wins");
   }

   else if (playersMove === "paper" && computerMove=== "scissors") {
      console.log(" play wins");
   }

   else if (playersMove === "scissors" && computerMove=== "paper") {
      console.log(" play wins");
   }
   else{
      console.log(" play loses")
   };