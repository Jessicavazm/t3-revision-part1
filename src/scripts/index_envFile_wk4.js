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

// Import module in Node syntax: const variable = require("node:module_name");
// All the file handling operations will be handled by the fs module
const fs = require("node:fs");

// Synchronous way
// fs.writeFileSync(".env", contentToWrite);

// Asynchronous way
// fs.writeFile(filePath, fileContents, callback);
fs.writeFile(".env", contentToWrite, (error) => {
    if (error) {
        console.log('Error encountered: ', error.message);
    } 
    else {
        console.log('File written successfully!');
    }
})

console.log('File has been written.')
