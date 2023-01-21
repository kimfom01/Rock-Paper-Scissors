"use strict";

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const reset = document.querySelector(".reset");

let playerScore = 0;
let computerScore = 0;
let computerChoice;

function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3) + 1;

    if (randNum === 1) {
        return "rock";
    }
    if (randNum === 2) {
        return "paper";
    }

    return "scissors";
}

function getPlayerChoice(e) {
    let playerChoice = e.srcElement.className;

    return playerChoice;
}

function getScore(playerSelection, computerSelection) {
    let playerScore = 0;
    let computerScore = 0;

    if (playerSelection === "rock" && computerSelection === "scissors") {
        return [++playerScore, computerScore];
    }
    if (playerSelection === "paper" && computerSelection === "rock") {
        return [++playerScore, computerScore];
    }
    if (playerSelection === "scissors" && computerSelection === "paper") {
        return [++playerScore, computerScore];
    }
    if (playerSelection === "scissors" && computerSelection === "rock") {
        return [playerScore, ++computerScore];
    }
    if (playerSelection === "rock" && computerSelection === "paper") {
        return [playerScore, ++computerScore];
    }
    if (playerSelection === "paper" && computerSelection === "scissors") {
        return [playerScore, ++computerScore];
    }

    return [playerScore, computerScore];
}

function checkWhoWon(gameResult) {
    if (gameResult[0] === 1) {
        return "player";
    }
    else if (gameResult[1] === 1) {
        return "computer";
    }
    else {
        return "draw";
    }
}

function playRound(e) {
    let playerChoice = getPlayerChoice(e);
    computerChoice = getComputerChoice();
    let result = getScore(playerChoice, computerChoice);
    let winner = checkWhoWon(result);

    if (winner === "player") {
        ++playerScore;
    }
    if (winner === "computer") {
        ++computerScore;
    }

    displayOutput(playerChoice, computerChoice);
    endGame();
}

function endGame() {
    const divResults = document.querySelector('.results');

    if (playerScore === 5 || computerScore === 5) {
        let message;
        if (playerScore === 5) {
            message = "Congratulations! You won the game!";
        }
        else {
            message = "Sorry, the computer won the game.";
        }

        divResults.textContent = message;
        divResults.classList.add('blue-background');

        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }
}

function displayOutput(playerChoice, computerChoice) {
    const player = document.querySelector('.player');
    const cpu = document.querySelector('.cpu');
    const scores = document.querySelector('.scores')

    resetChoices(player, cpu);

    player.appendChild(assignImage(playerChoice));
    cpu.appendChild(assignImage(computerChoice))

    scores.textContent = `${playerScore}:${computerScore}`
}

function assignImage(choice) {
    const image = document.createElement('img');
    image.src = `./images/${choice}.png`;
    image.alt = `${choice}`;
    image.className = 'image';
    image.width = 200
    image.height = 200

    return image
}

function resetChoices(playerChoice, computerChoice) {
    playerChoice.innerHTML = '';
    computerChoice.innerHTML = '';
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    const divResults = document.querySelector('.results');
    const scores = document.querySelector('.scores');
    const cpuChoice = document.querySelector('.cpu');
    const playerChoice = document.querySelector('.player');

    divResults.textContent = "";
    divResults.classList.remove('blue-background');
    scores.textContent = "";
    cpuChoice.textContent = "";
    playerChoice.textContent = "";

    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
}


rock.addEventListener("click", playRound);
paper.addEventListener('click', playRound);
scissors.addEventListener('click', playRound);
reset.addEventListener("click", resetGame);
