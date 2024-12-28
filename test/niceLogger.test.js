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

    });

    test("messageRepeater repeats numbers correctly", () => {

    });

    test.skip("messageRepeater repeats arrays correctly", () => {

    });

})