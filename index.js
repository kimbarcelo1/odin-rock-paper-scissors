function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    let computerChoice;

    switch (randomNumber) {
        case 1:
            computerChoice = "rock";
            break;
        case 2:
            computerChoice = "paper";
            break;
        case 3:
            computerChoice = "scissors";
            break;
    }

    return computerChoice;
}

function playRound(humanChoice, computerChoice) {
    round++;
    roundPara.textContent = `Round ${round}`;

    playerPara.textContent = `Player choice: ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}`;
    computerPara.textContent = `Computer choice: ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`;

    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === "rock" && computerChoice === "paper") {
        roundResultPara.textContent = "You lose! Paper beats Rock.";
        computerScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        roundResultPara.textContent = "You won! Rock beats Scissors.";
        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        roundResultPara.textContent = "You won! Paper beats Rock.";
        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        roundResultPara.textContent = "You lose! Scissors beats Paper.";
        computerScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        roundResultPara.textContent = "You lose! Rock beats Scissors.";
        computerScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        roundResultPara.textContent = "You won! Scissors beats Paper.";
        humanScore++;
    }
    else if (humanChoice === computerChoice) {
        roundResultPara.textContent = "It's a tie!";
    }

    scoresPara.textContent = `Scores: ${humanScore} | ${computerScore}`;

    if (humanScore >= 5) {
        winner = "Human";
    }
    else if (computerScore >= 5) {
        winner = "Computer";
    }
    else if (humanScore >= 5 && computerScore >= 5) {
        winner = "Tie"
    }

    if (winner) {
        roundResultPara.textContent = `The winner is ${winner}! Your score is ${humanScore}. Computer score is ${computerScore}.`;
        buttons.forEach((button) => button.disabled = true);
    }

    resultsDiv.appendChild(roundPara);
    resultsDiv.appendChild(roundResultPara);
    resultsDiv.appendChild(playerPara);
    resultsDiv.appendChild(computerPara);
    resultsDiv.appendChild(scoresPara);
}

let humanScore = 0;
let computerScore = 0;
let winner;
let round = 0;

const buttons = document.querySelectorAll("#container > button");
const resultsDiv = document.querySelector("#results");

const roundPara = document.createElement("h2");

const roundResultPara = document.createElement("h2");
const playerPara = document.createElement("p");
const computerPara = document.createElement("p");
const scoresPara = document.createElement("p");

roundResultPara.style.backgroundColor = "yellow";

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const humanSelection = e.target.id;
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    });
});

const reset = document.querySelector("#reset");

reset.addEventListener("click", (e) => {
    location.reload();
});