
const input = prompt("What's your pick?");

const result=[];

if(input.toLowerCase()==="rock"){
    result.push("rock");
}
else if(input.toLowerCase()==="paper"){
    result.push("paper");
}
else if(input.toLowerCase()==="scissors"){
    result.push("scissors");
}
else{
    result.push("invalid  entry")
}
const computerPlay=()=>{
    const result=["rock","paper","scissors"]
    return result[Math.floor(Math.random()*result.length) ] 
}

const playerSelection = result[0];
const computerSelection = computerPlay();

const playRound=(playerSelection,computerSelection)=>{
   if (playerSelection==="rock" &&computerSelection==="scissors"){
       console.log("You win! Rock beats Scissors")

   }
   else if(playerSelection==="rock" &&computerSelection==="paper"){
       console.log("You lose! Paper beats Rock")
   }
   else if(playerSelection==="rock" &&computerSelection==="rock"){
       console.log("You draw")
   }
  else if (playerSelection==="paper" &&computerSelection==="scissors"){
       console.log("You Lose! Scissors beats Paper")
   }
  else if(playerSelection==="paper" &&computerSelection==="rock"){
    console.log("You win! Paper beats Rock")
   }
  else if(playerSelection==="paper" &&computerSelection==="paper"){
       console.log("You draw")
   }
  else if (playerSelection==="scissors" &&computerSelection==="paper"){
       console.log("You win! scissors beats paper")
   }
  else if(playerSelection==="scissors" &&computerSelection==="rock"){
       console.log("You lose! rock beats scissors")
   }
  else if(playerSelection==="scissors" &&computerSelection==="scissors"){
       console.log("You draw")
   }
   else{
       console.log(result[0])
   }
}

const game=()=>{
   playRound(playerSelection, computerSelection);
   playRound(playerSelection, computerSelection); 
   playRound(playerSelection, computerSelection);
   playRound(playerSelection, computerSelection);
   playRound(playerSelection, computerSelection);
}
game();