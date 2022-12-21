// Picks one of the three options "Rock", "Paper", "Scissor"
function getComputerChoice() {
    random = Math.floor(Math.random() * 3);
    let choice = "";
    if (random === 0) {
        choice = "Rock";
    }
    else if (random === 1) {
        choice = "Paper";
    }
    else {
        choice = "Scissor";
    }
    return choice;
}

let computerChoice = getComputerChoice();