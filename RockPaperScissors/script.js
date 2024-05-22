function selectInput(playerChoice) {
    document.getElementById("playerChoiceDisplay").innerHTML = playerChoice;
    let computerChoice = Math.floor(Math.random() * 3) + 1;

        if(computerChoice === 1) {
            computerChoice = "rock";
            document.getElementById("computerChoiceDisplay").innerHTML = "rock";
        } else if(computerChoice === 2) {
            computerChoice = "paper";
            document.getElementById("computerChoiceDisplay").innerHTML = "paper";
        } else {
            computerChoice = "scissors"
            document.getElementById("computerChoiceDisplay").innerHTML = "scissors";
        }



        if(computerChoice === playerChoice) {
            document.getElementById("winnerDisplayText").innerHTML = "It's a tie! :|"
        } else if(computerChoice ==="rock" && playerChoice === "paper") {
            document.getElementById("winnerDisplayText").innerHTML = "You Won! :)"
        } else if(computerChoice ==="rock" && playerChoice === "scissors") {
            document.getElementById("winnerDisplayText").innerHTML = "You lost :("
        } else if(computerChoice ==="paper" && playerChoice ==="rock") {
            document.getElementById("winnerDisplayText").innerHTML = "You lost :("
        } else if(computerChoice === "paper" && playerChoice ==="scissors") {
            document.getElementById("winnerDisplayText").innerHTML = "You Won! :)"
        } else if(computerChoice === "scissors" && playerChoice ==="rock") {
            document.getElementById("winnerDisplayText").innerHTML = "You Won! :)"
        } else if (computerChoice === "scissors" && playerChoice ==="paper") {
            document.getElementById("winnerDisplayText").innerHTML = "You lost :("
        }

        if(document.getElementById("winnerDisplayText").innerHTML === "You Won! :)") {
            document.getElementById("winnerDisplay").style.backgroundColor = "green";
        }

    if(document.getElementById("winnerDisplayText").innerHTML === "You lost :(") {
        document.getElementById("winnerDisplay").style.backgroundColor = "red";
    }

    if(document.getElementById("winnerDisplayText").innerHTML === "It's a tie! :|") {
        document.getElementById("winnerDisplay").style.backgroundColor = "grey";
    }

}