console.log('Typing Test Begins!')

// Element Selectors
const playButton = document.getElementById("playButton");
const sentenceDisplay = document.getElementById("sentenceDisplay");
const inputField = document.getElementById("inputField");
const resultsSection = document.getElementById("resultsSection");

// Sentence Fetching
async function getRandomSentence() {
    const response = await fetch('https://random-word-api.herokuapp.com/word');
    console.log(response);
}

// Event Listener
playButton.addEventListener('click', getRandomSentence);