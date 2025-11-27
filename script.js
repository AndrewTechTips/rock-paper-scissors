let humanScore = 0;
let computerScore = 0;


// Function for getting the random computer result
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    switch(choice) {
        case 0: 
            return "rock";
        case 1:
            return "paper";
        case 2: 
            return "scissors" 
    }
}

// Function for getting the human choice, and make it case insensitive so we can compare them easily
function getHumanChoice() {
    return prompt("Enter a choice:").toLowerCase();
}

//Function for playing 1 round and printing the results 
function playRound(humanChoice, computerChoice) {

    if(humanChoice === computerChoice) {
        humanScore++;
        computerScore++;
        alert(`Equality -> The score is ${humanScore}:${computerScore}`)
    } else if(
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        alert(`You win! ${humanChoice} beats ${computerChoice} -> The score is ${humanScore}:${computerScore}`);
    }
    else {
        computerScore++;
        alert(`You lose! ${computerChoice} beats ${humanChoice} -> The score is ${humanScore}:${computerScore}`);
    }
}



