const { reachDestination } = require("../src");

describe("reachDestination", () => {
  test("returns string with estimated time of arrival", () => {
    expect(reachDestination(60, 60)).toEqual(
      "Your estimated arrival time is 1 hours"
    );

    expect(reachDestination(100, 60)).toEqual(
      "Your estimated arrival time is 2 hours"
    );

    expect(reachDestination(150, 70)).toEqual(
      "Your estimated arrival time is 3 hours"
    );

    expect(reachDestination(200, 50)).toEqual(
      "Your estimated arrival time is 4 hours"
    );
  });
});
