const UserView = require('./../../app/views/UserView')

describe("Testd for Userview", () => {
    
    test("Return an error object when try to create a new user with a null payload", ()=> {
        
        const payload = null
        const result = UserView.createUser(payload)
        // https://jest.io/docs/using-matchers#strings
        expect(result.error).toMatch(/payload no existe/)
    }),

    test("Return an error object when try to create a new user with a null payload with invalid properties", () => {
        const payload = {username: null, name: 12, id: "id"}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/necesitan tener un valor válido/)
    }),

    test("Return an error object when try to create a new user with a null payload with missing properties", () => {
        const payload = {username: "username", name: "name", id: "id"}
        const result = UserView.createUser(payload)
        expect(result.userName).toBe("username")
        expect(result.name).toBe("name")
        expect(result.id).toBe(1)

    }),

    test("Create a user by a given valid payload", () => {
        const payload = {username: "username", name: "name", id: "id"}
        const result = UserView.createUser(payload)
        expect(result.userName).toBe("username")
        expect(result.name).toBe("name")
        expect(result.id).toBe(1)

    })
}); 
