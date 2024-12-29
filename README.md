# T3 JS Revision


## Week 1 - Introduction to JavaScript

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


### Ternary Operator

    condition ? expressionIfTrue : expressionIfFalse;

    let someCoolMessage = (someMessage === 'Bananas') 
    ? someMessage.toLocalUpperCase() // this makes the someMessage be displayed in Upper letters
    : 'Default message.'
    
- Ternary operation works the same as IF statement but it's a shorter version.
- You can use methods such as .toLocalUpperCase() on strings.


### Switch Case

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


### Short Circuit

    someFruit is declared in the example above.
    
    let circuitLogicMessage = someFruit && 'We have a message';
    console.log(circuitLogicMessage); //output: We have a message

- Short circuit logic refers to the behave of logical operators && (AND) and || (OR). 
- If the first value is falsy("", 0, false boolean), it returns the first part.
- Evaluate if the first part is true, if so, return the second part. 
- || (OR) operator returns the first block that is true. If both values are false, it returns the second block.


### FOR Iterator
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


### forEach Loop
forEach iterates only over arrays, it iterates over each element. This iterator does not support break and it also requires a callback function as an arg.

    fruitChoices.forEach(element => {
        console.log(element.toLocalUpperCase())
    });


### forOf Loop
forOf iterates over any iterable object (arrays, strings, maps, sets) elements. It can be terminated earlier and it does not need a callback function.

    for (const fruit of fruitChoices) {
        console.log(fruit)
    }


### forIn Loop
forIn iterates over object's keys. To avoid inherited properties, use hasOwnProperty method.

    let person = { name: "Alice", age: 25 };

    for (let key in person) {
        console.log(`${key}: ${person[key]}`)
    } // output: name: Alice age: 25


### Map Method 
Map returns a new array, and every element has a change applied to it.

    let fruitChoicesShort = fruitChoices.map(fruit => {
        return fruit.substring(0,3)
    });

    console.log(fruitChoicesShort);

- Single line map doesn't require a return statement
- Requires a callback function.


### Filter Method
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

### Example with String

    let text = "Hello, World!";

    // Methods on string object
    console.log(text.length);           // Output: 13
    console.log(text.toUpperCase());    // Output: "HELLO, WORLD!"
    console.log(text.includes("World")); // Output: true
    console.log(text.replace("World", "JavaScript")); // Output: "Hello, JavaScript!"

### Example with Array

    let numbers = [1, 2, 3, 4, 5];

    numbers.push(6);         // Adds a number towards the end
    console.log(numbers);    // Output: [1, 2, 3, 4, 5, 6]

    numbers.pop();           // Remove the last number
    console.log(numbers);    // Output: [1, 2, 3, 4, 5]

    let doubled = numbers.map(num => num * 2); // Multiply the values by 2. 
    console.log(doubled);     // Output: [2, 4, 6, 8, 10]


### THIS Keyword
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


## Week 2 - Node and NPM
For week 2, we will be working in the server, no need to link JS file to index.html to see how it live. Instead we use 'node path_to_file' to execute the file and see it magic in the terminal.

Node is a runtime environment that lets you run JS outside the browser. Node allows you to create a full stack application, build backend systems, write server-side applications, work with API, databases and files.

Npm is the default package manager for JavaScript. NPM contains a very large library of packages (around 800,000 packages available). Developers can share their own packages and search for packages they want to use in their applications. It contains packages for back-end and front-end and it's the biggest Software Registry nowadays.

https://npmjs.com to check available packages and documentation. 


### Important points
- When creating a repository in Git, you can select the Node .gitignore template.
- Built on V8 engine (Same engine that is used for Google Chrome).
- Check if Node is installed: nvm -v (nvm is a version manager for node.js)
- package.json is the heart of the app. It contains packages used, path to main application, scripts, name and version.
- Important to create your main file inside of a source folder. Eg: src/index.js
- Scripts are custom commands, scripts can be combined and ran together. No spaces are allowed in the scripts. Scripts also allows to have another script inside.


### Commands to initialise the node project
- Create the node package: "npm init -y" (speeds the process fulfilling info automatically). "npm init" initialise the project, but you need to fill some info: package name, description, entry point (where your main app is).
- How to run application in server side: node path_to_file eg: node src/index.js
- How to run a script: npm run script_name
- package-lock.json contains more details about your Node Project. It describes the node's tree application. 


        "scripts": {
            "start": "node src/diceRoller_week2"
        },

        How to run:

        npm run start
        or
        npm start (only works for the "start" script)

- npm install: this command install all dependencies and packages needed to run the application.


### NPM Packages
Dependencies: packages needed to run the specific package. Dependents: Packages that relies on the specific package. Unpacked Size and Updates are important points to look at when getting a package.

--save-dev is used to install packages as a Development Dependency (this reduces the package size).

- inquirer.js: Package used to get user input.
- nodemon: Package used to automatically restarting the node application when file changes in the directory are detected. 
- node --watch: does the same as Nodemon but it's already built in Node. How to use: node --watch path_to_file. How to run: npm run dev
- JSDoc: Automatically creates JSDoc
- prompt-sync: Package used to get input from user.
- npm audit: checks for any vulnerabilities on packages that have been installed.

### Error handling in JS
- In JavaScript the try, catch, throw, finally blocks are used to handle errors.
- console.error: displays the message in red colour (useful for debugging).
- console.info: provides informational messages.
- console.debug: provides debugging messages.


## Week 3 - Jest
Jest is used to do unit testing (smaller pieces of code). Jest was developed by Facebook and it works with JavaScript code, including Node.js, React apps, Angular, Vue and more. 

Example of a Test Scrypt from ED:

    test("Description of test here", () => {
        expect("data to check is passed here").toBeTruthy();
    });


- Test Driven Development (TDD): Bottom- top approach. First you create the test and after you develop the application. Red-Green-Refactor is the steps in the process of writing a TDD cycle. 
    - Red: Write a test that will possibly fail.
    - Green: Make changes in the test to ensure the test now will pass.
    - Refactor: This step polishes the code to ensure code is efficient and clean.
- How to instal (dev environment preferred): npm install --save-dev jest
- How to run: npm run test
- When creating test cases, you should create a new folder called "test".
- Inside of the test folder, creates a new file for each functionality.
- Conventional name: function_name + test.js eg: niceLogger.test.js
- "describe" keyword: handy tool used to group related tests together. It has the same syntax as test functions.
- test.skip: it skips that specific test case.
- How to implement watch functionality in Jest: "testWatch": "jest --watch"
- Matchers: Methods provided by Jest to assert that values meet specific conditions. They’re typically used with expect(), which wraps the value you're testing.
- toBe:	Strict equality (===) Primitive values (numbers, strings). This checks the memory references.
- toEqual: Deep equality (content) Objects, arrays, or nested structures. This checks the value and the data type structure.