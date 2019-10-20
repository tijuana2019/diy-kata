const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
  it("Returns 15 cat years when human is 1", () => {
    expect(humanCatDogYears(1)).toEqual([1, 15, 15]);
  });

  it("Returns 24 cat years when human is 2", () => {
    expect(humanCatDogYears(2)).toEqual([2, 24, 24]);
  });

  it("returns 28 cat years when human is 3", () => {
    expect(humanCatDogYears(3)).toEqual([3, 28, 28]);
  });

  it("returns 15 dog years when human is 1", () => {
    expect(humanCatDogYears(1)).toEqual([1, 15, 15]);
  });

  it("returns 24 dog years when human is 2", () => {
    expect(humanCatDogYears(2)).toEqual([2, 24, 24]);
  });

  it("returns 32 dog years when human is 4", () => {
    expect(humanCatDogYears(4)).toEqual([4, 32, 32]);
  });
});

// Look Ma, no handlebars!!!
