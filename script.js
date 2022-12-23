// Picks one of the three options "Rock", "Paper", "Scissor"
let playerWins = 0;
let computerWins = 0;
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


// playes the round of game
function playRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase();

    let result = "";
    let winningChoice = "";
    let loosingChoice = "";
    if (playerChoice === "rock" && computerChoice === "paper") {
        result = "Loose";
        winningChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
        loosingChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
        computerWins++;
    }
    else if (playerChoice === "rock" && computerChoice === "scissor") {
        result = "Win";
        winningChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
        loosingChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
        playerWins++
    }
    else if (playerChoice === "paper" && computerChoice === "rock") {
        result = "Win";
        winningChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
        loosingChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
        playerWins++
    }
    else if (playerChoice === "paper" && computerChoice === "scissor") {
        result = "Loose";
        winningChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
        loosingChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
        computerWins++;
    }
    else if (playerChoice === "scissor" && computerChoice === "rock") {
        result = "Loose";
        winningChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
        loosingChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
        computerWins++;
    }
    else if (playerChoice === "scissor" && computerChoice === "paper") {
        result = "Win";
        winningChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
        loosingChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
        playerWins++;
    }
    else {
        result = "Draw";
    }
    if (result !== "Draw") {
        return `You ${result} ${winningChoice} beats ${loosingChoice}!`;
    }
    return "It's a Draw!"
}

//starts the round
function game() {
    while (playerWins < 5 && computerWins < 5) {
        let playerChoice = prompt("Enter your choice");
        let computerChoice = getComputerChoice();
        console.log(playRound(playerChoice, computerChoice));
    }
    console.log(`final results player: ${playerWins} Computer: ${computerWins}`);
    if (playerWins > computerWins) {
        console.log("Good Job Champion!..You Won...");
    }
    else {
        console.log("You lost... Almost there...");
    }
    playerWins = computerWins = 0;
}

game();