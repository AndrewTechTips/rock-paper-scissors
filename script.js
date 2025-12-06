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

    //As we see in  css , with this we can remove or add style for separate reasons
    result.classList.remove("text-win", "text-lose", "text-draw");

    if(humanChoice === computerChoice) {
        result.textContent = "It's a Draw";
        message.textContent = `You both chose ${humanChoice}`;
        result.classList.add("text-draw");

    } else if(
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        scoreHuman++;
        playerScore.textContent = scoreHuman;

        result.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        message.textContent = `You chose ${humanChoice}, Computer chose ${computerChoice}`;
        
        result.classList.add("text-win");
    }
    else {
        scoreComputer++;
        computerScore.textContent = scoreComputer;
      
        result.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        message.textContent = `You chose ${humanChoice}, Computer chose ${computerChoice}`;

        result.classList.add("text-lose");
    }
}

function checkWinner() {
    if(scoreHuman === 5) {
        endGame("CONGRATULATIONS! 🏆", "text-win")
    } else if(scoreComputer === 5) {
        endGame("GAME OVER! 🤖", "text-lose");
    }
}

const resetBtn = document.querySelector("#resetBtn");

//When the reset button is pressed, the page is reloaded, using the window location reload method
resetBtn.addEventListener("click", () => window.location.reload());

/*We can create a function, for ending the game, that will display separe color for text
Based on win or lose, and will remove the classes style that were used for win and lose
*/ 
function endGame(finalMessage, colorClass) {

    result.textContent = "Game Complete";
    result.className = "result";

    message.textContent = finalMessage;
    message.setAttribute("style", "font-size: 18px", "font-weight: bold");
    message.style.color = colorClass === "text-win" ? "#2ecc71" : "#e74c3c";
    
    disableButtons();

    resetBtn.classList.remove("hidden");
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



