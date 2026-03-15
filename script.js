// ROCK PAPER SCISSORS 

const choices = ['rock', 'paper', 'scissors'];  
const playerDisplay = document.getElementById('playerdisplay');
const computerDisplay = document.getElementById('computerdisplay');
const resultDisplay = document.getElementById('resultdisplay');
const playerScoreDisplay = document.getElementById('playerscoredisplay');
const computerScoreDisplay = document.getElementById('computerscoredisplay');

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = '';

    if (playerChoice === computerChoice) {
        result = "IT'S A TIE!";
    }
    else{
        switch(playerChoice) {
            case 'rock':
                result = (computerChoice === 'scissors') ? "YOU WIN!" : "COMPUTER WINS!";
                break;
                case 'paper':
                result = (computerChoice === 'rock') ? "YOU WIN!" : "COMPUTER WINS!";
                break;
                case 'scissors':
                result = (computerChoice === 'paper') ? "YOU WIN!" : "COMPUTER WINS!";
                break;
    }
}

    playerDisplay.textContent = `PLAYER: ${playerChoice.toUpperCase()}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice.toUpperCase()}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove('greenText', 'redText')

    switch(result) {
        case "YOU WIN!":
            resultDisplay.style.color = 'green';  
            playerScore++;
            playerScoreDisplay.textContent = playerScore;  
            break;
        case "COMPUTER WINS!":
            resultDisplay.style.color = 'red';
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
}

}


console.log('Game loaded. Waiting for player choice...');