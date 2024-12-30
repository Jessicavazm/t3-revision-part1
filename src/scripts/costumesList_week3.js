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


dataArray.forEach((costume) => {
    console.log(costume);
});


// Fetch the element and stores it in a variable
let costumesContainer = document.getElementById("costumeContainer");

// Add text to the container
costumesContainer.innerText = "Hello World!";
