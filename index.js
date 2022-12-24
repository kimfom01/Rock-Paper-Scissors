"use strict";

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
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

    displayWinner(winner, computerChoice);
    endGame();
}

function endGame() {
    const divResults = document.querySelector('.results');

    if (playerScore === 5 || computerScore === 5) {
        if (playerScore === 5 || computerScore === 5) {
            // Display message indicating the winner
            let message;
            if (playerScore === 5) {
                message = "Congratulations! You won the game!";
            }
            else {
                message = "Sorry, the computer won the game.";
            }

            divResults.textContent = message;

            // Disable the buttons
            rock.disabled = true;
            paper.disabled = true;
            scissors.disabled = true;
        }
    }
}

function displayWinner(winner, computerChoice) {
    const cpuChoice = document.querySelector('.cpu-choice');
    const divResults = document.querySelector('.results');
    const scores = document.querySelector('.scores')

    cpuChoice.textContent = `Computer Choice: ${computerChoice}`;

    if (winner !== "draw") {
        divResults.textContent = `${winner} won this round`;
    }
    else {
        divResults.textContent = `${winner}`;
    }

    scores.textContent = `Player ${playerScore}:${computerScore} Computer`
}

rock.addEventListener("click", playRound);
paper.addEventListener('click', playRound);
scissors.addEventListener('click', playRound);