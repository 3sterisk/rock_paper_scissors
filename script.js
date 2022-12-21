// Picks one of the three options "Rock", "Paper", "Scissor"
function getComputerChoice() {
    random = Math.floor(Math.random() * 3);
    let choice = "";
    if (random === 0) {
        choice = "rock";
    }
    else if (random === 1) {
        choice = "paper";
    }
    else {
        choice = "scissor";
    }
    return choice;
}



function playRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase();

    let result = "";
    let winningChoice = "";
    let loosingChoice = "";
    if (playerChoice === "rock" && computerChoice === "paper") {
        result = "Loose";
        winningChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
        loosingChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
    }
    else if (playerChoice === "rock" && computerChoice === "scissor") {
        result = "Win";
        winningChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
        loosingChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
    }
    else if (playerChoice === "paper" && computerChoice === "rock") {
        result = "Win";
        winningChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
        loosingChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
    }
    else if (playerChoice === "paper" && computerChoice === "scissor") {
        result = "Loose";
        winningChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
        loosingChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
    }
    else if (playerChoice === "scissor" && computerChoice === "rock") {
        result = "Loose";
        winningChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
        loosingChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
    }
    else if (playerChoice === "scissor" && computerChoice === "paper") {
        result = "Win";
        winningChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
        loosingChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
    }
    else {
        result = "Draw";
    }

    if (result !== "Draw") {
        return `You ${result} ${winningChoice} beats ${loosingChoice}!`;
    }
    return "It's a Draw!"
}
const computerChoice = getComputerChoice();
console.log(playRound("papeR", computerChoice));