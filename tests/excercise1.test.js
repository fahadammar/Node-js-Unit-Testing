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

describe("applyDiscount", () => {
  it("Should Apply 10% discount if customer has more than 10 points", () => {
    // We replaced the function, this is how we replace Fun in JS
    db.getCustomerSync = function (customerId) {
      console.log("Fake Reading Customer...");
      return { id: customerId, points: 20 };
    };
  });

  const order = { customerId: 1, totalPrice: 10 };
  lib.applyDiscount(order);
  expect(order.totalPrice).toBe(9);

  /* 
  NOTE: The Unit testing is done, without any external dependency. If there is external dependency then we are doing integration testing not Unit. So as this
  function we testing was depended on DB, so we made a fake DB function above (basically replaced the real one, with the fake one) and tested the function, in this way we done the UNIT TESTING
  NOTE: Lec-175 Mock Functions
  */
});
