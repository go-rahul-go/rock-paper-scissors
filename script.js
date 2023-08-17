const computeroptions=["rock","paper","scissor"];

const card=document.querySelector("#card");
const buttons=document.querySelectorAll("button");
const result=document.querySelector("#result");
const playerResult=document.querySelector("#player-score");
const computerResult=document.querySelector("#computer-score");

let playerScore=0;
let computerScore=0;

buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        const result=playGame(button.id,computerMove());
    });
});

function computerMove()
{
    var index=Math.round(Math.random() * 3);
    return computeroptions[index];
}

function playGame(playerSelection,computeroption)
{
    card.setAttribute("class",getCard(computeroption));
    card.style.color="blue";
    if(playerSelection===computeroption)
    {
        result.innerText="it's a tie";
    }
    else if((playerSelection==="rock" && computeroption==="scissor") ||
    (playerSelection==="paper" && computeroption==="rock") ||
    (playerSelection==="scissor" && computeroption==="paper"))
    {
        playerScore++;
        playerResult.innerText=`${playerScore}`;
        result.innerText="player Won";
        
    }
    else
    {
        computerScore++;
        computerResult.innerText=`${computerScore}`;
        result.innerText="computer won";
        
    }

}


function getCard(computeroption)
{
    switch(computeroption)
    {
        case "rock":
            console.log(computeroption);
            return "fas fa-fist-raised";
        case "paper":
            console.log(computeroption);
            return "fas fa-solid fa-hand";   
        case "scissor":
            console.log(computeroption);
            return "fas fa-hand-peace";   
            
    }
}