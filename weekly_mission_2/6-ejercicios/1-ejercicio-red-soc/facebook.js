const face = {
 user: "alrare",
 userName: "AlexRamRey",
 age: 35,
 getAge: function(){
   return this.age
 },
 getUserName: function(){
  return this.userName 
 }
}

console.log("Usuario de facebook: " + face.user)
console.log("Edad: " + face.getAge())
console.log("Username: " + face.getUserName())
