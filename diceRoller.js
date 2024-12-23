// check if the file has been linked correctly
console.log('Start of the Dice Roller!!')


// simple dice roller function
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


// specific dice roller function that calls the simple function 
// Using function expression
const rollDice25 = function() {
    rollDice(25);
}

rollDice25();


// Using Arrow function / Anonymous function
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
const rollDice8 = () => rollDice(8);
console.log('The side you rolled for the 8-sided die is: ' + rollDice8())

