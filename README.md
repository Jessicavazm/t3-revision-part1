# T3 JS Revision

## Week 1

- console.log is useful for debugging in JS.

### Declaring variables

    Let example:
    let age;
    age = 21;
    age = 30;
    console.log(age); // output: 30

    Const example:
    const name = 'Jess';
    name = 'Luke';
    console.log(name) // output: Jess

- let and const are the preferable ways to declare variables. 
- 'Let' allows you to change the variable's value while 'const' doesn't allow it. 
- Const needs to be initialised when declared.


### If/ Else

        if (condition) {
            do this
        } else {
            do this
        }

- If condition can be used to evaluate a condition just like Python. 
- If statement can also be used to evaluate the variables truthy/ falsy values.
- Falsy values: zero, negative zero, false, empty string, null, undefined and Not A Number. 


### Ternary operator

    condition ? expressionIfTrue : expressionIfFalse;

    let someCoolMessage = (someMessage === 'Bananas') 
    ? someMessage.toLocalUpperCase() // this makes the someMessage be displayed in Upper letters
    : 'Default message.'
    
- Ternary operation works the same as IF statement but it's a shorter version.
- You can use methods such as .toLocalUpperCase() on strings.


### Switch case

    someFruit = 'mango';

    switch (someFruit) {
        case 'orange':
            console.log('We have oranges');
            break;
        case 'mango':
            console.log('We have mangoes');
            break;
        default:
            console.log('We have another fruit');
            break;
    } //Output: we have mangoes

- Switch case compares a specified value to different cases.
- To make it work like IF/ ELSE statement, you need to add 'break. 
- Without break the switch statement will fall through the subsequent cases regardless if the cases matches or not. 


### Short circuit

    someFruit is declared in the example above.
    
    let circuitLogicMessage = someFruit && 'We have a message';
    console.log(circuitLogicMessage); //output: We have a message

- Short circuit logic refers to the behave of logical operators && (AND) and || (OR). 
- If the first value is falsy("", 0, false boolean), it returns the first part.
- Evaluate if the first part is true, if so, return the second part. 
- || (OR) operator returns the first block that is true. If both values are false, it returns the second block.


### FOR iterator
Iterates over each element in the array. It works with numbers, strings and arrays. It gives you flexibility since you can control index, step and termination. This loop is best used in simple tasks.

    for (initialization; condition; increment) {
        // Code to execute
    }

    let fruitChoices = [
        "orange",
        "banana",
        "apple"
    ]

    // define variable / condition / what to do on each iteration 
    for (let index = 0; index < fruitChoice.length; index++) {
        const element = fruitChoice[index];
        console.log(element);
    }

### forEach iterator
forEach iterates only over arrays, it iterates over each element. This iterator does not support break and it also requires a callback function as an arg.

    fruitChoices.forEach(element => {
        console.log(element.toLocalUpperCase())
    });

### forOf
forOf iterates over any iterable object (arrays, strings, maps, sets) elements. It can be terminated earlier and it does not need a callback function.

    for (const fruit of fruitChoices) {
        console.log(fruit)
    }

### forIn
forIn iterates over object's keys. To avoid inherited properties, use hasOwnProperty method.

    let person = { name: "Alice", age: 25 };

    for (let key in person) {
        console.log(`${key}: ${person[key]}`)
    } // output: name: Alice age: 25

### Map method 

Map returns a new array, and every element has a change applied to it.

    let fruitChoicesShort = fruitChoices.map(fruit => {
        return fruit.substring(0,3)
    });

    console.log(fruitChoicesShort);

- Single line map doesn't require a return statement
- Requires a callback function.

### Filter method
It returns a new array with the elements that meets the condition. This method also requires a callback function. Example bellow is using the && operator.

    let nonCitrusFruits = fruitChoices.filter(fruit => {
        return fruit != 'oranges' && fruit != 'lemons'
    });

    console.log(nonCitrusFruits); // output: 'banana', 'apple'


### Objects

Stores key-value pairs. Use dot operator or brackets to fetch from objects. Using the object above, fetching a name would look like this: person.name or person['name'] //output: 'Jess'

    const person = {
        name: 'Jess',
        age: 31,
        city: 'Melbourne',
        contact: {
            tel: 40304333,
            cel: 28287297,
            voiceMailMessage: function () {
                console.log("This message comes from a nested object.")
            }
        }
    };

    console.log(person.contact.voiceMailMessage); // output: This messages comes from a nested obj

    // use Object. to fetch keys from an object, it returns an array with keys.
    console.log(Object.keys(person)); //output: (4) ['name', 'age', 'city', 'contact']

    // to fetch the nested keys
    console.log(Object.keys(person.contact));


- Objects can be nested inside other objects.
- You can create functions inside objects (This is called Methods).


### Functions

Small pieces of code that performs tasks. Functions takes input in form of arguments. In JS, every function implicitly returns a value, even if no return statement is provided (undefined will be returned in this case). Use the 'function' keyword to define a function + (parameters) + {statements to execute} .


    functionCalculateArea(length, width) {
        return length * width
    };

    // store result in a variable, you need to use let or const here
    let area = calculateArea(5,3); 
    
    // print the result
    console.log(area); //output: 15

- A function is a standalone block of code that can be called independently.
- It is defined using the function keyword (or arrow function syntax).
- Functions are not tied to any object, though they can work with objects.
- Function expressions => functions that are defined inside of the object. Parenthesis () are needed to call the function.
- Characteristics of Functions:
    - Functions are first-class citizens in JS
        - Assigned to variables
        - Passed as arguments to other functions
        - Returned from functions
    - Return (obvious one)
    - Hoisting (Function declarations are hoisted to the top of their scope. This means you can call a function before it has been declared).
    - Functions expressions doesn't allow hoisting feature.
    - Scope (Global and Local)


### Arrow Function

    () => {
        statement to execute
    };


### Methods

    // defining a function
    function greet(name) {
        console.log('Hello' + name)
    };

    const person = {
        name: 'Jess',
        age: 31,
        greetingMessage: greet // this is a method (function passed as an obj property)
    };

    // printing and calling the method on the object person. () is needed to execute the method.
    console.log(person.greetingMessage(person.name));

- A method is a function that is attached to an object as a property.
- It is invoked using the dot notation or bracket notation on the object.
- Methods have access to the object they belong to via the this keyword.
- JS has a large range of built-in methods available to use in predefined objects such as .min .max .math

### Example String

    let text = "Hello, World!";

    // Methods on string object
    console.log(text.length);           // Output: 13
    console.log(text.toUpperCase());    // Output: "HELLO, WORLD!"
    console.log(text.includes("World")); // Output: true
    console.log(text.replace("World", "JavaScript")); // Output: "Hello, JavaScript!"

### Example Array

let numbers = [1, 2, 3, 4, 5];

    numbers.push(6);         // Adds a number towards the end
    console.log(numbers);    // Output: [1, 2, 3, 4, 5, 6]

    numbers.pop();           // Remove the last number
    console.log(numbers);    // Output: [1, 2, 3, 4, 5]

    let doubled = numbers.map(num => num * 2); // Multiply the values by 2. 
    console.log(doubled);     // Output: [2, 4, 6, 8, 10]


### This keyword

The this keyword is a reference to the execution context of a function or block of code. It allows access to the object that "owns" the code being executed.

        const person = {
        name: "Jess",
        greet() {
            console.log(this.name); // Refers to 'person'
        },
    };

    person.greet(); // Output: Jess

### JSDoc example
Highly recommended to use JSDoc to explain your code. More info on how to document on: https://jsdoc.app

    /**
    * Example JSDoc Comment - Simple Dice Roller Function
    * @param {number} [diceSize=6] 
    */