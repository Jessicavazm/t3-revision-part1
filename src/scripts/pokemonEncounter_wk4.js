console.log('Pokemon journey begins...')

// Fetch elements
const encounterButton = document.getElementById('pokemonEncounterButton');
const PokemonRenderArea = document.getElementById('encounteredPokemonArea');
const pokemonContainerDiv = document.getElementById('pokemonContainer');
const encounterGroupButton = document.getElementById('pokemonGroupEncounterButton');

// Function to fetch Pokemon data and display in Front-end 
function renderPokemonData(pokemonData){
    if (!pokemonData.name) {
        return;
    }
    // add a class to pokemonContainerDiv to style it
    pokemonContainerDiv.classList += 'pokemonCardEntry';

    // create HTML elements and append elements
    let pokemonHeading = document.createElement('h1');
    pokemonHeading.innerText = pokemonData.name;
    pokemonContainerDiv.appendChild(pokemonHeading);

    let pokemonImage = document.createElement('img');
    // .src is the path to the path to pokemon img
    pokemonImage.src = pokemonData.image;
    pokemonContainerDiv.appendChild(pokemonImage);

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

    // Create an sound element 
    pokemonAudioButton = document.createElement('button');
    pokemonAudioButton.innerText = 'Play sound';
    pokemonAudioButton.addEventListener('click', () => {
        let pokemonAudioObject = new Audio(pokemonData.sound);
        pokemonAudioObject.play();
    });
    pokemonContainerDiv.appendChild(pokemonAudioButton);

    PokemonRenderArea.appendChild(pokemonContainerDiv);
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
// parameter can be empty if you don't need to access event's details
encounterButton.addEventListener('click', async () => {
    console.log('Doing something here...');

    let pokemonResult = await getPokemon();

    console.log(pokemonResult);

    renderPokemonData(pokemonResult);
});

// Create an event listener for Group Button
encounterGroupButton.addEventListener('click', async () => {
    pokemonContainerDiv.innerText = "";
    // From what we've learnt so far
    // let pokemonResult1 = await getPokemon();
    // renderPokemonData(pokemonResult1);
    // let pokemonResult2 = await getPokemon();
    // renderPokemonData(pokemonResult2);
    // let pokemonResult3 = await getPokemon();
    // renderPokemonData(pokemonResult3);
    // let pokemonResult4 = await getPokemon();
    // renderPokemonData(pokemonResult4);
    // let pokemonResult5 = await getPokemon();
    // renderPokemonData(pokemonResult5);
    // let pokemonResult6 = await getPokemon();
    // renderPokemonData(pokemonResult6);

    // It hits multiple API requests first and once it finishes it sends it out
    let multiplePokemonResult = await Promise.all([
        getPokemon(),
        getPokemon(),
        getPokemon(),
        getPokemon(),
        getPokemon(),
        getPokemon()
    ]);

    // Check if the output is as expected
    console.log(multiplePokemonResult);

    multiplePokemonResult.forEach(renderPokemonData);
    
    // Lengthier version of the above code
    // multiplePokemonResult.forEach((pokemonResult) => {
    //     renderPokemonData(pokemonResult);
    // });
})

