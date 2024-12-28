const {niceLogger} = require("../src/niceLogger_week2.js");

// Test Script Syntax
// test("", () => {
// expect(who).toBe(what);
// })

test("niceLogger returns Hello World", () => {
    // test happens here
    expect(niceLogger()).toBe("Hello World!");
});