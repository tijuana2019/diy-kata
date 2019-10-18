const { fizzBuzz } = require("../src");

const number = 0;

describe("fizzBuzz", () => {
  test("returns Fizz when passed a multiple of 3", () => {
    expect(fizzBuzz(9)).toEqual("Fizz");
    expect(fizzBuzz(3)).toEqual("Fizz");
    expect(fizzBuzz(12)).toEqual("Fizz");
  });

  test("returns Buzz when passed a multiple of 5", () => {
    expect(fizzBuzz(10)).toEqual("Buzz");
    expect(fizzBuzz(100)).toEqual("Buzz");
    expect(fizzBuzz(50)).toEqual("Buzz");
  });

  test("returns FizzBuzz when passed a multiple 3 and 5", () => {
    expect(fizzBuzz(15)).toEqual("FizzBuzz");
    expect(fizzBuzz(30)).toEqual("FizzBuzz");
    expect(fizzBuzz(45)).toEqual("FizzBuzz");
    expect(fizzBuzz(60)).toEqual("FizzBuzz");
    expect(fizzBuzz(75)).toEqual("FizzBuzz");
    expect(fizzBuzz(90)).toEqual("FizzBuzz");
  });

  test("returns the number when it isn't a multiple of 3 or 5", () => {
    expect(fizzBuzz(7)).toEqual(7);
    expect(fizzBuzz(8)).toEqual(8);
    expect(fizzBuzz(67)).toEqual(67);
  });
});
