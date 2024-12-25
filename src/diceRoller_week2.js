console.log('Dice Roller Application starting...')


/**
 * Roll a random dice side from a variable-sided dice
 * @param {number} [diceSide=6] The total number of sides in the dice
 * @returns {number} The side of the dice rolled
 */
function rollDice(diceSide=6) {
    let diceResult = 0;
    diceResult = Math.ceil(Math.random() * diceSide);
    return diceResult;
}

console.log("The side you rolled is: " + rollDice());
