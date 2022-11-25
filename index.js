"use strict";

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

function getPlayerChoice() {
    let playerChoice = prompt("Rock, Paper, Scissors? (Enter your choice):", "");

    playerChoice = playerChoice.toLowerCase();

    return playerChoice;
}

function playRound(playerSelection, computerSelection) {
    console.log(`Player selection: ${playerSelection}`)
    console.log(`Computer selection: ${computerSelection}`)

    if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win! Rock beats Scissors";
    }
    if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Win! Paper beats Rock";
    }
    if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win! Scissors beats Paper";
    }
    if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lose! Rock beats Scissors";
    }
    if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock";
    }
    if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You Lose! Scissors beats Paper";
    }

    return "Draw! Nice Game";
}

function checkWhoWon(gameResult) {
    if (gameResult.substring(4, 5) === "W") {
        return "player";
    }
    else if (gameResult.substring(4, 5) === "L") {
        return "computer";
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let winner;

    for (let i = 0; i < 5; i++) {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();

        let result = playRound(playerSelection, computerSelection);
        console.log(result);

        winner = checkWhoWon(result);
        if (winner === "player") {
            ++playerScore;
        }
        if (winner === "computer") {
            ++computerScore;
        }
    }

    console.log(`Final results - Player ${playerScore}:${computerScore} Computer`)
}

// game();