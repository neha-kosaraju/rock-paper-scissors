let options = ["Rock", "Paper", "Scissors"];
let computer = options[Math.floor(Math.random()*options.length)]
console.log(computer);

function gameResults () {
    if (player.toUpperCase() === computer.toUpperCase()) {
        console.log("It's a tie!");
    } else if (player.toUpperCase() === "ROCK" && computer.toUpperCase() === "PAPER") {
        console.log("Better luck next time! Paper beats rock.");
    } else if (player.toUpperCase() === "ROCK" && computer.toUpperCase() === "SCISSORS") {
        console.log("Congrats, you win! Rock beats scissors.");
    } else if (player.toUpperCase() === "PAPER" && computer.toUpperCase() === "SCISSORS") {
        console.log("Better luck next time! Scissors beats paper.");
    } else if (player.toUpperCase() === "PAPER" && computer.to.UpperCase() === "ROCK") {
        console.log("Congrats, you win! Paper beats rock.");
    } else if (player.toUpperCase() === "SCISSORS" && computer.toUpperCase() === "ROCK") {
        console.log("Better luck next time! Rock beats scissors.");
    } else if (player.toUpperCase() === "SCISSORS" && computer.toUpperCase() === "PAPER") {
        console.log("Congrats, you win! Scissors beats paper.");
    } else {
        console.log("Please enter a valid choice: rock, paper or scissors.");
    }
    

}

let player = ;
gameResults();
