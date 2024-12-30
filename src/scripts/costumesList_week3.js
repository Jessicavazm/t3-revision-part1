// Declare the data to display in the front-end
let dataArray = [
    "Frankenstein",
    "Dracula",
    "Vampire",
    "Chucky",
    "Wednesday",
    "Voldemort",
    "T-Rex",
    "Gremlin Gizmo",
    "Joker",
    "Clowns"
];

// Fetch the element and stores it in a variable
let costumesContainer = document.getElementById("costumeContainer");

// Create an unordered list tag, ensure you store element in variable
let costumeContainerList = document.createElement("ul");

// Add text to the container
// costumesContainer.innerText = "Hello World!";

// Loop to print each costume
dataArray.forEach((costume) => {
    // Verify what we are working with
    console.log(costume);

    // Create the list element
    let newCostumeEntry = document.createElement("li");

    // Add the value to the HTML element
    newCostumeEntry.innerText = costume;

    // Add a button to each entry that removes it from the list
    let removeButton = document.createElement("button");

    // Add a placeholder value/ name to the button
    // removeButton.innerText = "Remove" + costume;
    removeButton.innerText = `Remove ${costume}`;

    // Append the element to the container
    // Here you are appending the newCostumeEntry to the costumeContainerList element
    costumeContainerList.appendChild(newCostumeEntry);

    // Append Button 
    costumeContainerList.appendChild(removeButton);
});

// Add the container to the HTML Page
// Here you are appending the costumeContainerList to the costumeContainer element
costumeContainer.appendChild(costumeContainerList);

