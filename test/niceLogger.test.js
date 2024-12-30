var {niceLogger, messageRepeater} = require("../src/niceLogger_week2.js");

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

        //mock fn
        niceLogger = jest.fn();
        // mock pretended expected value
        niceLogger.mockReturnValue("Hello World!")

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
});

// Using JEST Globals

beforeEach(() => {
    console.log('Test has been started!');
});

afterEach(() => {
    console.log('A test has finished.');
});

beforeAll(() => {
    console.log('Testing will begin now!');
    // for APIS, the possible commands we could run are:
    // get JWT from the API
    // store JWT for all tests to use
    // connection successful, make sure API is active and ready
    // connection successful, make sure database is available and running

});

afterAll(() => {
    console.log("All tests has been completed!");
    // for APIS, delete all the resources that were created
})