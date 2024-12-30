// try, catch, throw, finally example

try {
    let a = 15, b = 0;
    if (b === 0) {
        // throw "Trying to divide by zero...";
        throw new Error ("New error: Division by Zero!");
        console.log("Does this runs?") // this won't run, program ignore anything after new Error
    }
    // console.log("What about this one?") This wont run either, it goes straight to catch
} catch (error) {
    // console.error changes the text colour to red
    console.error("Cannot divide by zero!!");
    console.log(error);
} finally {
    console.log("I always run!!");
}