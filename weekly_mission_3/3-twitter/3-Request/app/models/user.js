class User {
  constructor(id,username,name,bio) {
    this.id = id
    this.username = username
    this.name = name
    this.bio = bio
    this.dateCreate = new Date()
    this.lastUpdate = new Date()
  }

  getUserName(){
    return this.username
  }

  getBio(){
    return this.bio
  }

  getDateCreate(){
    return this.dateCreate
  }

  getLastUpdated(){
    return this.lastUpdate
  }

  //set setUsername(newUsername){
  //  this.username = newUsername
  //}

  //set setBio(newBio){
  //  this.bio = newBio
  //}

}

// Esta línea nos permite exportar nuestra clase
module.exports = User