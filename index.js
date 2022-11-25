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

// console.log(getPlayerChoice());