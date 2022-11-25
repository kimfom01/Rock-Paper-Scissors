function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3) + 1;

    if (randNum === 1) {
        return "Rock";
    }
    if (randNum === 2) {
        return "Paper";
    }

    return "Scissors";
}

console.log(getComputerChoice());