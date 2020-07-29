const lib = require('../lib');

describe('absolute', () => {
  it('should return positive number if input is positive', () => {
    const result = lib.absolute(1);
    expect(result).toBe(1);
  });

  it('should return positive number if input is negative', () => {
    const result = lib.absolute(-1);
    expect(result).toBe(1);
  });

  it('should return 0 if input is 0', () => {
    const result = lib.absolute(0);
    expect(result).toBe(0);
  });
});

describe('greet', () => {
  it('should return the greetings message', () => {
    const result = lib.greet('fahad');
    expect(result).toMatch(/fahad/);
    expect(result).toContain('fahad');
  });
});

describe('getCurrencies', () => {
  it('should return the supported currencies', () => {
    const result = lib.getCurrencies();

    /* It's too general, if we produce some bug, it still will be passed. (i.r return 1 in currency func()) */
    expect(result).toBeDefined();
    expect(result).not.toBeNull();

    // Too Specific
    expect(result[0]).toBe('USD');
    expect(result[1]).toBe('AUD');
    expect(result[2]).toBe('EUR');
    expect(result.length).toBe(3);
    /* Don't be too specific. IN arrays don't check each element by there index. If in future
    sorting of array occurs or length gets shorter or greater, this test will result in error. */

    // Proper Way - it will check no matter in which positions they are. They should be in Array
    expect(result).toContain('USD');
    expect(result).toContain('AUD');
    expect(result).toContain('EUR');

    // Ideal Way - The ideal way is this. The Array should contain following Currencies
    expect(result).toEqual(expect.arrayContaining(['USD', 'AUD', 'EUR']));
  });
});
