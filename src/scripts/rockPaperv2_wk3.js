// Get the elements
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const resultDiv = document.getElementById("result");
const scoreDiv = document.getElementById("score");

const modeSelect = document.getElementById("mode");
const roundsInput = document.getElementById("rounds");
const startGameButton = document.getElementById("startGame");
const gameContentDiv = document.getElementById("gameContent");


// Initialise the score variables to be 0
let userScore = 0;
let computerScore = 0;

// Initialise variables for Best-of-Game Mode
let rounds = 0;
let maxRounds = null;


// Show or hide the rounds input based on game mode selection
modeSelect.addEventListener('change', () => {
    if (modeSelect.value == 'best-of') {
        // Changing the CSS property
        roundsInput.style.display = 'inline';
    } else {
        roundsInput.style.display = 'none';
        // this ensures rounds input is empty to start with
        roundsInput.value = '';
    }
});


// Start the game and set up the selected mode
startGameButton.addEventListener('click', () => {
    if (modeSelect.value === 'best-of') {
        maxRounds = parseInt(roundsInput.value);

        if(isNaN(maxRounds) || maxRounds < 1) {
            alert('Please enter a valid number of rounds.');
            return;
        }
    } else {
        maxRounds = null; // Endless Mode
    }
    gameContentDiv.style.display = 'block';
    
    resultDiv.textContent = `Game Started in ${modeSelect.value === 'best-of' ? `Best-of-${maxRounds}` : 'Endless'} mode.`
});


// Get the computer's choice of input

// Determine the winner based on user's choice and computer's choice

// Implement the Game Play Logic

// Add Event Listeners

//  Reset the game