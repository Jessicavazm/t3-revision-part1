console.log('Pokemon journey begins...')

// Fetch elements
const encounterButton = document.getElementById('pokemonEncounterButton');
const PokemonRenderArea = document.getElementById('encounteredPokemonArea');
const pokemonContainerDiv = document.getElementById('pokemonContainer');

// Function to fetch Pokemon data and display in Front-end 
function renderPokemonData(pokemonData){
    if (!pokemonData.name) {
        return;
    }
    // add a class to pokemonContainerDiv to style it
    pokemonContainerDiv.classList += 'pokemonCardEntry';

    // create HTML elements and append it
    let pokemonImage = document.createElement('img');
    // .src is the path to the path to pokemon img
    pokemonImage.src = pokemonData.image;
    pokemonContainerDiv.appendChild(pokemonImage);

    let pokemonHeading = document.createElement('h1');
    pokemonHeading.innerText = pokemonData.name;
    pokemonContainerDiv.appendChild(pokemonHeading);

    let pokemonTypesHeading = document.createElement('h3');
    pokemonTypesHeading.innerText = 'Types: ';
    pokemonContainerDiv.appendChild(pokemonTypesHeading);

    let pokemonTypeList = document.createElement('ul');
    // Loop through the array of pokemonData
    pokemonData.types.forEach((typeObject) => {
        // Create an element for each type
        let pokemonTypeListItem = document.createElement('li');
        // Add name to li
        pokemonTypeListItem.innerText = typeObject.type.name;
        // Append it to the ul
        pokemonTypeList.appendChild(pokemonTypeListItem);
    })

    // Append the element to the div
    pokemonContainerDiv.appendChild(pokemonTypeList)
}

// Function to get a random pokemon
function getRandomPokemonId() {
    // Random number between 1 and 1025 (max number of Pokemon)
    return Math.ceil(Math.random() * 1025);
}

// Function to fetch the pokemon from API
async function getPokemon() {
    console.log('Looking for a wild Pokemon');

    let apiResponse = await fetch('https://pokeapi.co/api/v2/pokemon/' + getRandomPokemonId());
    let apiData =  await apiResponse.json();

    // Fetch name, type, image, cry
    // let pokemonName = apiData.name;
    return {
        name: apiData.name,
        types: apiData.types,
        image: apiData.sprites.other.home.front_default,
        sound: apiData.cries.latest
    };
}

// Event listener for Pokemon Button, third option used for more than one stmt
// encounterButton.addEventListener('click', (event) => getPokemon(event));

// encounterButton.addEventListener('click', getPokemon);

encounterButton.addEventListener('click', async (event) => {
    console.log('Doing something here...');

    let pokemonResult = await getPokemon();

    console.log(pokemonResult);

    renderPokemonData(pokemonResult);
});

