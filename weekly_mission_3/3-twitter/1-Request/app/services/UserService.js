const User = require('./../models/user')

class UserService {
  static create(id, userName, name){
    return new User(id, userName, name, "SinBio")
  }

  static getInfo(user){
    return Object.values(user)
  }

  static updateUserUsername(user, userName){
    user.setUsername = userName
  }

  static getAllUserNames(users){
    const usersUserNames = users.map( user => user.userName)
    return usersUserNames
  }

}

module.exports = UserService

