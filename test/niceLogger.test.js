const {niceLogger, messageRepeater} = require("../src/niceLogger_week2.js");

// Test Script Syntax
// test("", () => {
// expect(who).toBe(what);
// })


// groups different test cases for the same functionality
describe ("niceLogger Function tests", () => {

    // different test cases
    test("niceLogger returns Hello World", () => {
        // test happens here
        // expect(sth).toBe(sth);

        // lets make a test
        expect(niceLogger()).toBe("Hello World!");
    });

    test("niceLogger returns Hello World", () => {
        // test happens here
        // expect(sth).toBe(sth);

        // lets make a test
        expect(niceLogger()).toBe("Hello World!");
    });

    test("niceLogger returns Hello World", () => {
        // test happens here
        // expect(sth).toBe(sth);

        // lets make a test
        expect(niceLogger()).toBe("Hello World!");
    });
})

describe ("messageRepeater Function test", () => {

    test("messageRepeater repeats words correctly", () => {
        let repeatedMessage = messageRepeater("hello");

        expect(repeatedMessage).toBe("hellohellohello");
        expect(repeatedMessage).toHaveLength(15);
    });

    test("messageRepeater repeats numbers correctly", () => {
        let repeatedMessage = messageRepeater(1);

        expect(repeatedMessage).toBe("111");
        expect(repeatedMessage).toHaveLength(3);
    });

    test("messageRepeater repeats arrays correctly", () => {
        let repeatedMessage = messageRepeater(["Hello", "World"]);

        expect(repeatedMessage).toEqual(["Hello", "World", "Hello", "World", "Hello", "World"])
        expect(repeatedMessage).toHaveLength(6);
    });

    test("messageRepeater repeats null or whitespaces correctly", () => {
        let repeatedMessage = messageRepeater("");

        expect (repeatedMessage).toEqual("");
        expect (repeatedMessage).toHaveLength(0);
    });
})