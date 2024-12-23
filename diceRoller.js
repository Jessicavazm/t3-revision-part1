// check if the file has been linked correctly
console.log('Start of the Dice Roller!!')

// simple dice roller function
/**
 * Example JSDoc Comment - Simple Dice Roller Function
 * @param {number} [diceSize=6] 
 */
function rollDice(diceSize = 6) {
    console.log(`Rolling a ${diceSize}-sided die...`)
    // math obj and random method
    // math ceil to rounds the number up
    let diceSide = Math.ceil(Math.random() * diceSize);
    // console.log(diceSide)
    return diceSide;
};


//Simple call, default parameter value
rollDice();

// Overwriting the default parameter value
rollDice(diceSize=10);

// or
rollDice(20);


/** 
 * Specific dice roller function that calls the simple function 
 * Using function expression
 */
const rollDice25 = function() {
    rollDice(25);
}

rollDice25();


/**
 * Using Arrow function / Anonymous function
 * @returns the result of rolling the die
 */
const rollDice15 = () => {
    // return rollDice(15);
    // or
    result = rollDice(15);
    return result;
}


// Store function in variable
let diceSide15 = rollDice15();
console.log('The side you rolled in this 15-sided die is: ' + diceSide15)

// if we want more functionality, then we use {}, otherwise we can use the shortened version

/**
 * Using the Roll Dice fn for an eight sided dice
 */
const rollDice8 = () => rollDice(8);
console.log('The side you rolled for the 8-sided die is: ' + rollDice8())


// Implementing the callback feature
// callback is a placeholder for function, in this example the function used is defined in the example above.
// make sure to return the function
/**
 * Description placeholder
 *
 * @param {*} side
 * @param {*} callback
 * @returns the callback function that will be passed, ideally the rollDice() function
 */
function customDiceRoll(side, callback) {
    return callback(side); //rollDice(30);
}

result = customDiceRoll(30, rollDice);
console.log(result);


// Callback function is defined when invoking the function itself
// Example of Hosting the function
rollMultipleDice(3, 6, (result) => console.log('Rolled: ' + result));

// function to roll multiple dice
function rollMultipleDice(numDice, diceSize, callback) {
    // use loop to run multiple dices
    for (let i=0; i < numDice; i++) {
        const result = rollDice(diceSize);
        callback(result);
    }
}


