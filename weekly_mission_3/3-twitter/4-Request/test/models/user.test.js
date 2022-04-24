const User = require('./../../../4-Request/app/models/user')

describe("Init test for User Class", () => {

  test('Add setters', () => {
    const user = new User(2, "alexramrey", "Alex", "Bio")
		
    user.setUsername = "Robert"  
		expect(user.username).toBe("Robert")
    
    user.setBio = "Newbio" 
		expect(user.bio).toBe("Newbio")
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
