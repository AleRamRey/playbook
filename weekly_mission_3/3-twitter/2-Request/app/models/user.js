class User {
  constructor(id,userName,name,bio,dateCreate,lastUpdate,following,followers) {
    this.id = id
    this.userName = userName
    this.name = name
    this.bio = bio
    //this.dateCreate = dateCreate
    //this.lastUpdate = lastUpdate
    this.dateCreate = new Date()
    this.lastUpdate = new Date()
    this.following = following
    this.followers = followers
  }
}

// Esta línea nos permite exportar nuestra clase
module.exports = User