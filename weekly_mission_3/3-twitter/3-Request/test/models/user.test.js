const User = require('./../../../3-Request/app/models/user')

describe("Init test for User Class", () => {

  test('Add getters', () => {
    const user = new User(2, "alexramrey", "Alex", "Bio")
		expect(user.getUserName()).toBe("alexramrey")
		expect(user.getBio()).toBe("Bio")
    expect(user.getDateCreate()).not.toBeUndefined()
    expect(user.getLastUpdated()).not.toBeUndefined()
	})
});

/*
describe("Test Suite Dummy Description", () => {
  test('Case 1 Dummy', () => {
    const resultOfSomething = 1 + 2
    expect(resultOfSomething).toBe(3);
  });
})
*/
