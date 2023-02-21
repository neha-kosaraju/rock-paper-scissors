
let player = "";

document.getElementById("rock").addEventListener("click", function(){
    player = "Rock";
    gameResults();
});
document.getElementById("paper").addEventListener("click", function() {
    player = "Paper";
    gameResults();
});
document.getElementById("scissors").addEventListener("click", function() {
    player = "Scissors";
    gameResults();
});

let gameNumber = document.getElementById("game").innerHTML;
let computerPoints = document.getElementById("computer").innerHTML;
let playerPoints = document.getElementsById("player").innerHTML;

function gameResults() {

    let options = ["Rock", "Paper", "Scissors"];
    let computer = options[Math.round(Math.random()*options.length)];

    gameNumber++;
    
    if (player === "Rock" && computer === "Paper") {
        document.getElementById("result-message").innerHTML = "Better luck next time! Paper beats rock.";
        computerPoints++;
    } else if (player === "Rock" && computer === "Scissors") {
        document.getElementById("result-message").innerHTML = "Congrats, you win! Rock beats scissors.";
        playerPoints++;
    } else if (player === "Paper" && computer === "Scissors") {
        document.getElementById("result-message").innerHTML = "Better luck next time! Scissors beats paper.";
        computerPoints++;
    } else if (player === "Paper" && computer === "Rock") {
        document.getElementById("result-message").innerHTML = "Congrats, you win! Paper beats rock.";
        playerPoints++;
    } else if (player === "Scissors" && computer === "Rock") {
        document.getElementById("result-message").innerHTML = "Better luck next time! Rock beats scissors.";
        computerPoints++;
    } else if (player === "Scissors" && computer === "Paper") {
        document.getElementById("result-message").innerHTML = "Congrats, you win! Scissors beats paper.";
        playerPoints++;
    } else {
        document.getElementById("result-message").innerHTML = "It's a tie!";
        playerPoints++;
        computerPoints++;
    }

    document.getElementById("game").innerHTML = gameNumber;
    
}
