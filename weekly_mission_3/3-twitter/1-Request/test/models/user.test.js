const User = require('./../../../1-Request/app/models/user')

describe("Init test for User Class", () => {

  test('Create an User object', () => {
    
    const user = new User(2,"alexramrey","Alex","Bio","2022-04-23","2022-04-23",100,200)

    expect(user.id).toBe(2)
    expect(user.userName).toBe("alexramrey")
    expect(user.name).toBe("Alex")
    expect(user.bio).toBe("Bio")
    expect(user.dateCreate).toBe("2022-04-23")
    expect(user.lastUpdate).toBe("2022-04-23")
    expect(user.following).toBe(100)
    expect(user.followers).toBe(200)
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
