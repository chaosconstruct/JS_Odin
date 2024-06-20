
let humanScore = 0;
let computerScore = 0 ;
let round = 0;

const container = document.querySelector(".container");
const content = document.createElement("div");
content.classList.add("content");
content.textContent = "Score"+" "+humanScore+" "+"and"+" "+computerScore;
container.appendChild(content);

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


function playRound(hc,cc){
    const humanChoice = hc;
    const computerChoice = cc;
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
    
    console.log({humanScore, computerScore});
    updateScore();

}

const btn = document.querySelector("#btn");
btn.onclick = () => playRound("rock",getComputerChoice());

const btn2 = document.querySelector("#btn2");
btn2.onclick = () => playRound("paper",getComputerChoice());

const btn3 = document.querySelector("#btn3");
btn3.onclick = () => playRound("scissor",getComputerChoice());
updateScore();


function updateScore(){

const container = document.querySelector(".content");
content.textContent = "Score"+" "+humanScore+" "+"and"+" "+computerScore+" "+ "Round"+ " " + round;
round+=1;
}


