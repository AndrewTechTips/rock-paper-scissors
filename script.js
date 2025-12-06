let scoreHuman = 0;
let scoreComputer = 0;

let playerScore = document.querySelector(".playerScore");
let computerScore = document.querySelector(".computerScore");
let choices = document.querySelector(".choices");
let result = document.querySelector(".result");
let message = document.querySelector(".message");

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

choices.addEventListener("click", (event) => {

    let playerSelection = event.target.id;

    if(playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
        playRound(playerSelection, getComputerChoice());
        checkWinner();
    }
} );

//Function for playing 1 round and printing the results 
function playRound(humanChoice, computerChoice) {

    if(humanChoice === computerChoice) {
        result.textContent = `Equal! Both chose ${humanChoice}`;
        message.textContent = `You chose ${humanChoice}, Computer chose ${computerChoice}`;

    } else if(
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        scoreHuman++;
        playerScore.textContent = scoreHuman;
        result.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        message.textContent = `You chose ${humanChoice}, Computer chose ${computerChoice}`;
    }
    else {
        scoreComputer++;
        computerScore.textContent = scoreComputer;
        result.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        message.textContent = `You chose ${humanChoice}, Computer chose ${computerChoice}`;

    }
}

function checkWinner() {
    if(scoreHuman === 5) {
        message.textContent = "CONGRATULATIONS! You won the game!";
        disableButtons();
    } else if(scoreComputer === 5) {
        message.textContent = "GAME OVER! The computer won.";
        disableButtons();
    }
}

//For the final we can make a function, that disables the buttons, 
//To do this, we can mannange the button.disabled = true; property 
//Using a forEach for all buttons

function disableButtons() {
    const allButtons = document.querySelectorAll(".btn");

    allButtons.forEach( button => 
        button.disabled = true 
    );
}



