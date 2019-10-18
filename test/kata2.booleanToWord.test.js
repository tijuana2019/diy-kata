const { booleanToWord } = require("../src");

const boolean = true;

describe("booleanToWord", () => {
  // how do we create specs again???
  test("returns a string from a boolean value", () => {
    expect(booleanToWord(true)).toEqual("true");
    expect(booleanToWord(false)).toEqual("false");
  });
});
