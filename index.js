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

function getHumanChoice() {
    const playerChoice = prompt("Rock, paper, scissors? ");
    return playerChoice;
}

function playGame() {

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice === "rock" && computerChoice === "paper") {
            console.log("You lose! Paper beats Rock");
            computerScore++;
        }
        else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("You won! Rock beats Scissors");
            humanScore++;
        }
        else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("You won! Paper beats Rock");
            humanScore++;
        }
        else if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log("You lose! Scissors beats Paper");
            computerScore++;
        }
        else if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log("You lose! Rock beats Scissors");
            computerScore++;
        }
        else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log("You won! Scissors beats Paper");
            humanScore++;
        }
        else if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        }
    }

    let humanScore = 0;
    let computerScore = 0;
    let winner;

    for (let i = 1; i <= 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        console.log(`Round ${i}`);

        playRound(humanSelection, computerSelection);

        console.log(`Player choice: ${humanSelection}`);
        console.log(`Computer choice: ${computerSelection}`);
        console.log(`Scores: ${humanScore} | ${computerScore}`);
        console.log("")
    }

    if (humanScore > computerScore) {
        winner = "Human";
    }
    else if (computerScore > humanScore) {
        winner = "Computer";
    }
    else {
        winner = "Tie"
    }

    console.log(`The winner is ${winner}!`);
    console.log(`Your score is ${humanScore}.`);
    console.log(`Computer score is ${computerScore}.`);
}

playGame();