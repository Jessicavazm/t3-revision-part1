console.log('Typing Test Begins!')

// Element Selectors
const playButton = document.getElementById("playButton");
const sentenceDisplay = document.getElementById("sentenceDisplay");
const inputField = document.getElementById("inputField");
const resultsSection = document.getElementById("resultsSection");

// Sentence Fetching
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
playButton.addEventListener('click', displaySentence());

// Start the game
function startGame() {
    // Initialise elements to empty state
    inputField.value = '';
    resultsSection.innerHTML = '';
    displaySentence();

    // Show necessary elements
    inputField.style.display = 'block',
    sentenceDisplay.style.display = 'block'

}