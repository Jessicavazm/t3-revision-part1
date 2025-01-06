console.log('Typing Test Begins!')

// Global variables
let correctCharacters = 0;
let totalCharacters = 0;
let startTime;
let timer = 10; // Timer in seconds (adjustable)
let timerInterval;

// Element Selectors
const playButton = document.getElementById("playButton");
const sentenceDisplay = document.getElementById("sentenceDisplay");
const inputField = document.getElementById("inputField");
const resultsSection = document.getElementById("resultsSection");
const timerDisplay = document.getElementById('timerDisplay');
const restartButton = document.getElementById('restartButton');

// Sentence Fetching function
async function getRandomSentence(wordCount) {
    try {
        const response = await fetch(`https://random-word-api.herokuapp.com/word?number=${wordCount}`);
        const data = await response.json();
        // join all the array elements + space between elements
        let sentence = data.join(' ');
        console.log(sentence);
        return sentence;
    } catch (error) {
        console.error('Failed to fetch sentence:', error);
        return 'Error Loading sentence, please try again.'
    }
}
// Ensure all the functions are async
async function displaySentence() {
    // Fetch sentence with 10 words
    randomSentence = await getRandomSentence(10);

    // Display the words in the HTML content
    sentenceDisplay.textContent = randomSentence;
}

// Event Listener
playButton.addEventListener('click', startGame);
inputField.addEventListener('input', trackTyping);
restartButton.addEventListener('click', restartGame);

// Start the game
function startGame() {
    // Initialise elements to empty state
    correctCharacters = 0;
    totalCharacters = 0;
    inputField.value = '';
    resultsSection.innerHTML = '';
    startTime = null;
    displaySentence();

    // Show necessary elements
    inputField.style.display = 'block';
    sentenceDisplay.style.display = 'block';
    timerDisplay.style.display = 'block';
    playButton.style.display = 'none';
    restartButton.style.display = 'block';
    restartButton.style.margin = 'auto';
}

// setInterval executes the function after 1s
function startTimer() {
    timerInterval = setInterval(() => {
        if (timer > 0) {
            timer--;
            timerDisplay.textContent = `Time Left: ${timer}s`;
        } 
        else {
            endGame();
        }
    }, 1000); // 1000ms = 1s
}

function trackTyping() {
    // console.log(startTime);
    if (!startTime) {
        // Record start time on first input
        startTime = new Date();
        console.log('time set:', startTime);
        startTimer();
    }

    const typedText = inputField.value;
    const sentence = sentenceDisplay.textContent;

    totalCharacters = typedText.length;
    correctCharacters = countCorrectCharacters(typedText, sentence);

    if (typedText === sentence) {
        // End the game if user finishes early
        endGame();
    }
    
    updateStats();
}

function countCorrectCharacters(typedText, sentence) {
    let correct = 0;
    const minLength = Math.min(typedText.length, sentence.length);
    
    for (let i = 0; i < minLength; i++) {
        if (typedText[i] === sentence[i]) {
            correct++;
        }
    }
    console.log(correct);
    return correct;
}

function updateStats() {
    const wpm = calculateWPM();
    const accuracy = Math.floor((correctCharacters / totalCharacters) * 100);
    console.log('Accuracy:', accuracy);
    displayResults(wpm, accuracy);
}

function displayResults(wpm, accuracy) {   
    resultsSection.innerHTML = `WPM: ${wpm} | Accuracy: ${accuracy}%`;
}

// Calculates the correct words per minute
function calculateWPM() {
    // Return time in seconds
    const timeElapsed = (new Date() - startTime) / 1000;

    // Return the correct words per minute
    wpm = Math.floor((correctCharacters / 5) / (timeElapsed / 60));
    console.log("WPM: ", wpm);
    return wpm
}

// Restart Game Functionality
function restartGame() {
    // Reset game variable and UI elements
    correctCharacters = 0;
    totalCharacters = 0;
    startTime = null;
    // Reset Timer
    timer = 10;
    clearInterval(timerInterval);

    // Reset and enable input fields
    inputField.value = '';
    inputField.style.display = 'block';

    // Display the new sentence and reset the other UI Elements
    displaySentence();
    resultsSection.innerHTML = '';
    timerDisplay.textContent = `Time Left: ${timer}s`;
    playButton.style.display = 'none';

}

function endGame(){
    // Stop the timer
    clearInterval(timerInterval);
    
    // Disable the input field after the game ends
    inputField.style.display = 'none';
    
    // Calculate the final accuracy && wpm
    const wpm = calculateWPM();
    const accuracy = Math.floor((correctCharacters / totalCharacters) * 100);
    
    // Display the result in the resultDiv
    resultsSection.innerHTML = `<p>Game Over! Your Final WPM: ${wpm} | Accuracy: ${accuracy}%</p>`;
    // Show the restart button
    restartButton.style.display = 'block';
}

