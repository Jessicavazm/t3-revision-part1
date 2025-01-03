// import prompt packages
// const inquirer = require('inquirer').default;]
const promptSync = require("prompt-sync")();

// ensure file has been linked or started correctly
console.log("Dice Roller Application starting...");

/**
 * Roll a random dice side from a variable-sided dice
 * @param {number} [diceSide=6] The total number of sides in the dice
 * @returns {number} The side of the dice rolled
 */
function rollDice(diceSide = 6) {
  if (diceSide <= 0) {
    throw new Error("Dice side must be greater than 0.");
  }
  let diceResult = 0;
  diceResult = Math.ceil(Math.random() * diceSide);
  return diceResult;
}

// console.log("The side you rolled is: " + rollDice());

// Using Inquirer package
// const prompt = inquirer.createPromptModule();

// prompt([
//     {
//         type: 'number',
//         name: 'dice_side',
//         message: 'How many sided dice do you want to roll?'
//     }
// ]).then((answer) => {
//     console.log(rollDice(answer.dice_side))
// });


// Using PromptSync package
/** Function to get the desired Dice Side/ Main function */
function getDiceSide() {
    do {
        const diceSide = promptSync("How many sided dice do you want to roll? ");
        try {
            const parsedDiceSide = parseInt(diceSide);
            if (isNaN(parsedDiceSide)) {
              throw new Error("Please enter a valid number.");
            }
            const diceResult = rollDice(diceSide);
            console.log(`You rolled a ${diceResult}-sided dice.`);
          } catch (error) {
            console.error("You got an error!");
            console.log(error); // this displays the error stack trace
          } finally {
            console.log('Dice roll operation completed.')
          }
        } while (promptSync('Do you want to roll again? (y/n)').toLocaleLowerCase() === 'y');
    }


getDiceSide();
