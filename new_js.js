


function getComputerChoice(){
    let a = Math.floor(Math.random()*3) ;
    let result;
    if (a == 0){
        result =  "rock";
    } else if (a == 1){
        result =  "paper";
    } else {
        result = "scissor";
    }
    return result;


}


function getHumanChoice(){
    let num = prompt("What's your play, select between Rock, Paper, Scissor?");
    return num.toLowerCase();
}


let humanScore = 0;
let computerScore = 0 ;

const humanSelection = getHumanChoice();
const computerselection = getComputerChoice();


function playRound(humanChoice,computerChoice){
    
    let a;
    if (humanChoice === "paper" && computerChoice === "rock"){
        a = "You win, paper beats rocks";
        humanScore+=1;
    } else if (humanChoice === "paper" && computerChoice === "scissor"){
        a = "You lose, scissor beats paper";
        computerScore+=1;
    } else if (humanChoice === "rock" && computerChoice === "scissor"){
        a = "You win, rock beats scissor";
        humanScore+=1;
    } else if (humanChoice === "rock" && computerChoice === "paper"){
        a = "You lose, paper beats rock";
        computerScore+=1;
    } else if (humanChoice === "scissor" && computerChoice === "paper"){
        a = "You win, scissor beats paper";
        humanScore+=1;
    } else if (humanChoice === "scissor" && computerChoice === "rock"){
        a = "you lose, rock beats scissor";
        computerScore+=1;
    } else {
        a = "Tie"
    }
    
    return{humanScore, computerScore};

}


//console.log(humanScore)
//console.log(playRound(humanSelection,computerselection));

 function playGame(){
     for (let index = 0; index < 5; index++) {
         const humanSelection = getHumanChoice();
         const computerselection = getComputerChoice();
         playRound(humanSelection,computerselection);
        
     }
     return {humanScore, computerScore};
 }


 console.log(playGame());