const spiderverse = require('./../app/spiderverse');
/*
describe("Test Suite Dummy Description", () => {
  test('Case 1 Dummy', () => {
    const resultOfSomething = 1 + 2
    expect(resultOfSomething).toBe(3);
  });
})
*/

describe("Unit Tests for Spiderverse Class", () => {
  test('1) Create a spiderverse objet', () => {
    const mySpiderverse = new spiderverse("Peter-Parker")
    expect(mySpiderverse.name).toBe("Peter-Parker");
  });
})
