function niceLogger(){
    console.log('Hello World!');
    return 'Hello World!';
}

function sampleTest(){
    return"Hey, I'm a sample Test.";
}

function messageRepeater(messageToRepeat) {
    // message to repeat
    if (Array.isArray(messageToRepeat)) {
        // sth
        return [...messageToRepeat, ...messageToRepeat, ...messageToRepeat]
    }
    else {
        let stringMessageToRepeat = messageToRepeat.toString()
        return stringMessageToRepeat + stringMessageToRepeat + stringMessageToRepeat
    }
}

// Exports the module 
module.exports = {
    niceLogger,
    sampleTest,
    messageRepeater
}


