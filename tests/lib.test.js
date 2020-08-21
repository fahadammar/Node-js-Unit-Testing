const lib = require("../lib");
const db = require("../db");
const mail = require("../mail");

describe("absolute", () => {
  it("should return positive number if input is positive", () => {
    const result = lib.absolute(1);
    expect(result).toBe(1);
  });

  it("should return positive number if input is negative", () => {
    const result = lib.absolute(-1);
    expect(result).toBe(1);
  });

  it("should return 0 if input is 0", () => {
    const result = lib.absolute(0);
    expect(result).toBe(0);
  });
});

describe("greet", () => {
  it("should return the greetings message", () => {
    const result = lib.greet("fahad");
    expect(result).toMatch(/fahad/);
    expect(result).toContain("fahad");
  });
});

describe("getCurrencies", () => {
  it("should return the supported currencies", () => {
    const result = lib.getCurrencies();

    /* It's too general, if we produce some bug, it still will be passed. (i.r return 1 in currency func()) */
    expect(result).toBeDefined();
    expect(result).not.toBeNull();

    // Too Specific
    expect(result[0]).toBe("USD");
    expect(result[1]).toBe("AUD");
    expect(result[2]).toBe("EUR");
    expect(result.length).toBe(3);
    /* Don't be too specific. IN arrays don't check each element by there index. If in future
    sorting of array occurs or length gets shorter or greater, this test will result in error. */

    // Proper Way - it will check no matter in which positions they are. They should be in Array
    expect(result).toContain("USD");
    expect(result).toContain("AUD");
    expect(result).toContain("EUR");

    // Ideal Way - The ideal way is this. The Array should contain following Currencies
    expect(result).toEqual(expect.arrayContaining(["USD", "AUD", "EUR"]));
  });
});

describe("getProduct", () => {
  it("Should Return The Product With the Given ID", () => {
    const result = lib.getProduct(1);

    // expect(result).toEqual({id:1, price: 10}); More Specific

    // Correct Way for the Objects
    expect(result).toMatchObject({ id: 1, price: 10 });
    expect(result).toHaveProperty("id", 1);
  });
  /* When we use toBe() matcher function, it compares the references of its arguments or match them, 
  with the ones in the memory. So to test the Objects, use toEqual(), couple of other matchers are
  also there!! 
  toMatchObject({only the properties you are interested in}), so if more properties are in object
  no worries, this matcher, will match only the one's you desire 
  toHaveProperty('id', 1) -> 1 is num so here the type is important. If you change to '1', it will give error */
});

describe("registerUser", () => {
  it("It should throw if username is Falsy", () => {
    const args = [null, undefined, NaN, "", 0, false];
    args.forEach((a) => {
      expect(() => {
        lib.registerUser(a);
      }).toThrow();
    });
  });

  it("It should return a User Object if valid username is passed", () => {
    const result = lib.registerUser("fahad");
    expect(result).toMatchObject({ username: "fahad" });
    expect(result.id).toBeGreaterThan(0);
  });

  /* 
  The Falsy or False values in JavaScript are:
    * Null
    * Undefined
    * NaN
    * ''
    * 0
    * false
  */
});

describe("notifyCustomer", () => {
  it("should send an e-mail to the customer", () => {
    db.getCustomerSync = jest.fn().mockReturnValue({ email: "a" });
    mail.send = jest.fn();

    lib.notifyCustomer({ customerId: 1 });

    expect(mail.send).toHaveBeenCalledWith();
  });
});

/*
If we load modules in many different places, in memory there will be single instance of that module in the memory.
*/
