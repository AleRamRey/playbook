const UserService = require('./../../../1-Request/app/services/UserService')

describe("Test for UserService", () => {

  test('1. Create an new user using the UserService', () => {
    
    const user = UserService.create(1,"Nuevo","New")

    expect(user.id).toBe(1)
    expect(user.userName).toBe("Nuevo")
    expect(user.name).toBe("New")
    expect(user.bio).not.toBeUndefined()
    
  }),
  
  test('2. Get all user data in a list', () => {
    
    const user = UserService.create(2,"Nuevo","New")
    const userInfoList = UserService.getInfo(user)
    expect(userInfoList[0]).toBe(2)
    expect(userInfoList[1]).toBe("Nuevo")
    expect(userInfoList[2]).toBe("New")
    expect(userInfoList[3]).not.toBeUndefined()
    
  }),

  test('3. Update userName', () => {
    
    const user = UserService.create(3,"Alex","alexramrey")
    UserService.updateUserUsername(user, "Alex")
    expect(user.userName).toBe("Alex")
  
  }),

  test('4. Given a list of users give me the list of userNames', () => {
    
    const user1 = UserService.create(1,"alexramrey1","Alex")
    const user2 = UserService.create(1,"alexramrey2","Alex")
    const user3 = UserService.create(1,"alexramrey3","Alex")
    const userNames = UserService.getAllUserNames([user1, user2, user3])
    expect(userNames).toContain("alexramrey1")
    expect(userNames).toContain("alexramrey2")
    expect(userNames).toContain("alexramrey3")
    
  })
  
});