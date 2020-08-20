const lib = require("../exercise1");

describe("fizzBuzz", () => {
  it("Should throw an exception if input is not a number", () => {
    expect(() => {
      lib.fizzBuzz("a");
    }).toThrow();
    expect(() => {
      lib.fizzBuzz(null);
    }).toThrow();
    expect(() => {
      lib.fizzBuzz(undefined);
    }).toThrow();
    expect(() => {
      lib.fizzBuzz({});
    }).toThrow();
  });

  it("should return input if it is not divisible by 3 or 5", () => {
    const result = lib.fizzBuzz(1);
    expect(result).toBe();
  });
});
