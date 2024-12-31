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


function renderData() {
    
    // Create an unordered list tag
    let costumesContainerList = document.createElement("ul");

    // Removes the existing content from the element
    costumesContainer.innerText = "";

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

        // Add an Event Listener to remove costume from list
        removeButton.onclick = (() => removeCostumeFromDataList(costume));

        // Append the element to the container
        // Here you are appending the newCostumeEntry to the costumeContainerList element
        costumesContainerList.appendChild(newCostumeEntry);

        // Append Button
        newCostumeEntry.appendChild(removeButton);

        // Add the container to the HTML Page
        // Append the costumeContainerList to the costumeContainer element
        costumesContainer.appendChild(costumesContainerList);
    });
}


function removeCostumeFromDataList(targetItemToRemove) {
    dataArray = dataArray.filter((costume) => costume != targetItemToRemove);
    renderData();
}


// event: User types a new costume and click on submit to add 
// targetInputId: Value of the element that needs to be added to the Costume List
function addCostumeToDataList(event, targetInputId) {

    // Find the form element that needs validation
    let formElement = document.getElementById("costumesInputForm");

    // Use the form element.checkValidity() method to save the result
    let isFormValid = formElement.checkValidity();

    // Do a conditional based on the result
    // Just enters here if the form is not valid
    if (!isFormValid) {
        formElement.reportValidity();
        return;
    }

    // Prevent the form from doing it's default behaviour (refreshing the page)
    event.preventDefault();
    console.log("Add costume to the list function is running!");

    // Find the input text field based on targetInputId
    let targetTextInput = document.getElementById(targetInputId);

    // Get the value from the field
    console.log(targetTextInput.value);

    // Append or push to the dataArray. Since it's an Array, you can use the 'push' method
    dataArray.push(targetTextInput.value);

    // Clear out the input field text
    targetTextInput.value = "";

    // Focus on the text field to enable quick data entry
    targetTextInput.focus();

    // Alert
    alert("Submitted a new entry: " + dataArray[dataArray.length - 1]);

    // renderData function call to update the page
    renderData();
}

// Find the form from the event
// Defined outside the function to not consume a lot of memory and && to be used by other functions.
let formInputButton = document.getElementById("formInputButton");

formInputButton.addEventListener("click", (event) => addCostumeToDataList(event, "costumeInputText"));
