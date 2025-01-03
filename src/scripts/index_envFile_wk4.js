console.log("This file is running");

let defaultEnv = {
    PORT: 5050,
    DATABASE_URL: "acc",
    JWT_SECURITY_KEY: "abc",
    SECRET_KEY: "apple",
    SECURE_API_KEY: "aaa"
};

let contentToWrite = "";

// What it should look like
// PORT = 5050,
// DATABASE_URL = "acc",
// JWT_SECURITY_KEY = "abc",
// SECRET_KEY = "apple",
// SECURE_API_KEY = "aaa"

Object.keys(defaultEnv).forEach(
    envKey => {
        // Add a line to the contentToWrite variable with the key name and value
        contentToWrite += `${envKey}=${defaultEnv[envKey]}\n`;
    }
);

console.log(contentToWrite)

// All the file handling operations will be handled by the fs(File System) module
// const fs = require("node:fs");

// Synchronous way
// fs.writeFileSync(".env", contentToWrite);

// Asynchronous way
// fs.writeFile(filePath, fileContents, callback);
// fs.writeFile(".env", contentToWrite, (error) => {
//     console.log('It reached the callback function')
//     if (error) {
//         console.log('Error encountered: ', error.message);
//     } 
//     else {
//         console.log('File written successfully!');
//     }
// })

// console.log("After the file write operation");

// console.log('File has been written.')

// Promise Version on node-fs
const fs = require('node:fs/promises');

// console.log('Before the promise');

// fs.writeFile(".env", contentToWrite)
//     .then(() => {
//         console.log('After the file has been created.');
//         console.log('Some extra operation happens here...');
//         throw new Error('Hey, you got an error!');
    // }).then(() => {
        // fs.writeFile(".testenv", contentToWrite)
        //     .then(() => {
        //         console.log('After the file has been written in the second file.')
        //     }).catch((error) => {
        //         console.log("Error encountered: ", error.message);
        //     });
    // }).catch((error) => {
    //     console.log("Error encountered: ", error.message);
    // }).finally(() => {
    //     console.log('This block always run.')
    // });

// console.log('After the promise');

// Async / Await function
// You need to use await with async function
async function writeEnvFile(){
    console.log('Before the await');
    try {
        let result = await fs.writeFile('.env', contentToWrite);
        console.log('Await process executes here...')
    } catch (error) {
        console.log("Error occurred: ", error.message);
    }
    console.log('After the await');
}

// How to call this Async function?
writeEnvFile();

async function app() {
    console.log('Before calling the app function');
    await writeEnvFile().then(() => {
        console.log('Did this work? Lets find out.')
    });
    console.log('After calling')
}

app();