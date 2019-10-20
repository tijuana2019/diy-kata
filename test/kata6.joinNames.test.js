/* eslint-disable prettier/prettier */
const { joinNames } = require("../src");

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    expect(joinNames({name: "Jane", name1: "John", name2: "Brian"})).toEqual("The names in the object are Jane, John & Brian");
  });
});
