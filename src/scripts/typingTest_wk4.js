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
}

function trackTyping() {
    console.log(startTime);
    if (!startTime) {
        // Record start time on first input
        startTime = new Date();
    }

    const typedText = inputField.value;
    const sentence = sentenceDisplay.textContent;

    totalCharacters = typedText.length;
    correctCharacters = countCorrectCharacters(typedText, sentence);

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

function endGame() {

}

