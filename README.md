# T3 JS Revision


# Netlify projects
Link for projects published on Netlify.

[Halloween Costume List application](https://elegant-hummingbird-0a0e38.netlify.app/)

[Rock Paper Scissors application](https://fascinating-truffle-917847.netlify.app)

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
- npm install: this command install all dependencies and packages needed to run the application.
- package-lock.json contains more details about your Node Project. It describes the node's tree application. 

    "scripts": {
        "start": "node src/diceRoller_week2"
    },

    How to run:

    npm run start
    or
    npm start (only works for the "start" script)


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
- Test coverage: script command that makes sure the implemented test covers all the basic features. It gives you information such as: missed case tests.
- Globals:
    - Jest provides global functions like test, expect, and describe to simplify writing tests.
    - These globals remove the need for imports in every test file.
    - You can disable them if you prefer explicit imports.
- Mock functions: Known as 'Spies' functions. Spies lets you spy on the behavior of a function. Mock functions expects pretended values.

    //mock fn
    niceLogger = jest.fn();
    
    // mock pretended expected value
    niceLogger.mockReturnValue("Hello World!")


## Halloween Costume List application 
Term 3 - Week 3 (Tuesday/ Thursday). Application to let users add new costumes to a Halloween Costume List. 

- Finding and reading elements
- Creating and Deleting
- Editing Elements


# Week 3 - Intro to JS DOM 
Document Object Model stands for the representation of the webpage. When we change the DOM, we can manipulate the web page structure, style and content dynamically without having to re-write or refresh the page. 

One important point is to ensure to store an element into a variable when you pretend to reuse or edit the element in a later stage. The example bellow shows a LI element being stored in a variable called newCostumeEntry (this example is from costumesList_week3.js file).

    let newCostumeEntry = document.createElement("li");

When working with DOM elements, it's a good practise to duplicate the JS file and make changes to the new file to ensure the application doesn't get cluttered. On the duplicated file, make sure you duplicate the functions and features required for the application to work, and then make the necessary changes to add/ or improve functionality.


## What we can do with Dom?
- Find and read elements:
    - document.getElementById 

- Create and delete elements:
    - document.createElement

- Edit elements
    - .innerText 

- Append elements:
    - .appendChild


### Event Listener
HTML events are actions that happen to elements on a webpage, like clicking a button or moving the mouse. JavaScript can respond to these events and make things happen. You can add event handler attributes directly in the HTML to run JavaScript code. Or, you can use event listeners in JavaScript functions to handle events more flexibly.

When an event occurs?
- An HTML web page has finished loading
- An HTML input field was changed
- An HTML button was clicked

Types of Event Listeners:
- onchange: An HTML element has been changed
- onclick: The user clicks an HTML element
- onmouseover: The user moves the mouse over an HTML element
- onmouseout: The user moves the mouse away from an HTML element
- onkeydown: The user pushes a keyboard key
- onload: The browser has finished loading the page

More Event Listeners: https://www.w3schools.com/jsref/dom_obj_event.asp

Syntax example from Costume List application:

    formInputButton.addEventListener("click", (event) => addCostumeToDataList(event, "costumeInputText"));


Event Type :
- The first argument ("click") tells the browser what kind of action to listen for.

Event Parameter:
- The second part, the event object, provides details about what happened during the event, which you can use inside your callback function.
- Event parameter is useful when you need to prevent default behaviour, know which element had the event listener or access additional information about the event.


## Rock, Paper, Scissors application 
Term 3 - Week 3 (Saturday).

- Generate a random computer Choice.
- Compare the user's choice to the computer's choice.
- Determine the winner.
- Add a feature: Keep Score.
- Game modes:
    - Best-of-X Mode
        - User Input: Prompt the user to enter the desired number of rounds.
        - Game Loop: Iterate the specified number of rounds.
        - Scorekeeping: Track the wins for each player.
        - Final Result: Declare the overall winner based on the final scores.
    - Endless Mode:
        - Same concept as the existing one.
        - Game goes on until the user chooses not to play.
        - Score is recorded throughout the game.


### CSS
- padding: 10px, 3px, 10px, 5px: This goes clock-wise 10x top, 3px right, 10px bottom, 5px left 
- class: give a class to elements when you want to style a group of elements
- id: give an ID when you need to style an unique element
 

# Week 4 - Intro to Async 

### Asynchronous code
JavaScript is a single thread programming language. Using Asynchronous coding, you can run multiple codes at the same time. A good example is JavaScript setTimeout().

Threads:
A thread is the smallest unit of execution in a computer's processor.

- Single-Threaded Execution:
    - Only one thread exists, and tasks are executed one after the other.
    - Example: JavaScript is single-threaded (using the main thread for synchronous code execution).
- Multi-Threaded Execution:
    - A program creates multiple threads, and tasks are distributed among them.
    - This allows the program to handle multiple tasks at the same time.

How Call Stack works?
- When you call an async function, it's pushed onto the stack(Web Apis)
- When that function finishes execution, it's popped off the stack.
- It's Last-In-First-Out (LIFO), meaning the last function added (or "pushed") is the first one to be removed (or "popped").

Event loop:
- JavaScript has a runtime model based on an event loop, which is responsible for executing the code, collecting and processing events, and executing queued sub-tasks.

Callback Queue:
- First in, first out concept

### How the Callback Queue Works with Async Code

<b>Call Stack:</b> This is where JavaScript executes synchronous code. Functions are pushed onto the stack and popped off when done. When you call an async function, it doesn’t block the stack. Instead, it delegates the task to another part of the JavaScript runtime (like Web APIs).

<b>Web APIs (or Background Tasks):</b> For tasks like setTimeout, fetch, or DOM events, JavaScript offloads the job to Web APIs (in browsers) or similar features in Node.js. These APIs handle the task while the call stack keeps running other code.

<b>Callback Queue (or Task Queue):</b> Once the async task is completed (like a timer finishing or data being fetched), the associated callback function is placed in the callback queue. Example: A setTimeout callback or a resolved Promise (via .then).

<b>Event Loop:</b> If the call stack is empty, it takes the next task from the callback queue (or the microtask queue, which has priority) and pushes it onto the stack for execution.


### FS Node module 
It’s short for File System and lets you interact with the file system to read, write, update, delete, or manage files and directories. It provides both synchronous and asynchronous methods for file system operations. Asynchronous is the preferred method since it doesn't block the event loop.

### Callback Functions
A callback function is a function passed as an argument to another function, to be executed later—either after some operation is complete or when an event occurs. You call back the function when it’s time to execute it.

Key Points About Callbacks
- It’s Just a Function: callback is a regular function that you pass into another function.
- Executed Later: It gets executed after the "parent" function does its job, hence the term "callback."
- Common in Asynchronous Code: Frequently used with APIs, timers, and events in JavaScript.


## Promises
Promises can be either resolved or rejected. If the promise is resolved, the code executes but if the promise is rejected it means an error will be caught by the promise method.

- To work with promises, you need to work with fs.
- A Promise represents an operation that will complete in the future.
- .then() is a method used to handle the resolved value of a Promise.
- When a Promise is fulfilled (i.e., it resolves successfully), the function you pass to .then() is executed.
- .catch block is used to catch errors. For every promise you create, you need to create a catch block (error handling).
- .finally block always run.


### Callback Functions in Each Block
- .then()
    - Callback Function: Runs when the Promise resolves successfully	
    - Parameter: Resolved value
- .catch()
    - Callback Function: Runs when the Promise is rejected	
    - Parameter: Error (rejection reason)
- .finally()
    - Callback Function: Runs when the Promise is settled	
    - Parameter: No arguments


## Async/ Await 
- When you use async, all the functions needs to be Async to work out.
- For async functions you need the await keyword.


## Working with Pokemon API 
T3- Week 4 Thursday - https://pokeapi.co.api/v2/pokemon/ditto



